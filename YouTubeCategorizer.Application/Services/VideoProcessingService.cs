using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using YouTubeCategorizer.Application.DTOs;
using YouTubeCategorizer.Core.Entities;
using YouTubeCategorizer.Core.Interfaces;

namespace YouTubeCategorizer.Application.Services
{
    public interface IVideoProcessingService
    {
        Task ProcessChannelsAsync(ChannelInputDto input);
        Task<CategorizedVideosDto> GetCategorizedVideosAsync();
    }

    public class VideoProcessingService : IVideoProcessingService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IYouTubeService _youTubeService;
        private readonly ICategorizationService _categorizationService;

        public VideoProcessingService(
            IUnitOfWork unitOfWork,
            IYouTubeService youTubeService,
            ICategorizationService categorizationService)
        {
            _unitOfWork = unitOfWork;
            _youTubeService = youTubeService;
            _categorizationService = categorizationService;
        }

        public async Task ProcessChannelsAsync(ChannelInputDto input)
        {
            var channelUrls = new[] { input.ChannelUrl1, input.ChannelUrl2, input.ChannelUrl3 }
                .Where(url => !string.IsNullOrWhiteSpace(url))
                .ToArray();

            foreach (var channelUrl in channelUrls)
            {
                await ProcessSingleChannelAsync(channelUrl);
            }
        }

        private async Task ProcessSingleChannelAsync(string channelUrl)
        {
            try
            {
                var (channelId, channelName) = await _youTubeService.GetChannelInfoAsync(channelUrl);

                var channel = await _unitOfWork.Channels.GetByChannelIdAsync(channelId);
                if (channel == null)
                {
                    channel = new Channel
                    {
                        ChannelId = channelId,
                        ChannelUrl = channelUrl,
                        Name = channelName
                    };
                    await _unitOfWork.Channels.AddAsync(channel);
                    await _unitOfWork.SaveAsync();
                }

                var rawVideos = await _youTubeService.GetChannelVideosAsync(channelId);

                var distinctVideos = rawVideos
                    .GroupBy(v => v.videoId)
                    .Select(g => g.First())
                    .ToList();

                var existingDbVideos = await _unitOfWork.Videos.GetVideosByChannelIdAsync(channel.Id);
                var existingVideoIds = new HashSet<string>(existingDbVideos.Select(v => v.VideoId));

                var newVideosToProcess = distinctVideos
                    .Where(v => !existingVideoIds.Contains(v.videoId))
                    .ToList();

                if (!newVideosToProcess.Any()) return;

                var allCategories = await _unitOfWork.Categories.GetAllAsync();
                var categoryCache = new ConcurrentDictionary<string, Category>(
                    allCategories.ToDictionary(c => c.Label, c => c));

                var semaphore = new SemaphoreSlim(15); // Increased from 5 to 15 for better concurrency
                var videosToAdd = new ConcurrentBag<Video>();

                var tasks = newVideosToProcess.Select(async videoData =>
                {
                    await semaphore.WaitAsync();
                    try
                    {
                        var (videoId, title, description) = videoData;
                        var textToAnalyze = $"{title} {description}";

                        var categoryLabel = await _categorizationService.CategorizeContentAsync(textToAnalyze);

                        var category = categoryCache.GetOrAdd(categoryLabel, label =>
                        {
                            return new Category { Label = label };
                        });

                        videosToAdd.Add(new Video
                        {
                            VideoId = videoId,
                            Title = title,
                            Description = description,
                            ChannelId = channel.Id,
                            Category = category
                        });
                    }
                    finally
                    {
                        semaphore.Release();
                    }
                });

                await Task.WhenAll(tasks);

                var newCategories = videosToAdd
                    .Select(v => v.Category)
                    .Where(c => c.Id == 0)
                    .Distinct()
                    .ToList();

                if (newCategories.Any())
                {
                    foreach (var cat in newCategories)
                    {
                        var existingCat = await _unitOfWork.Categories.GetByLabelAsync(cat.Label);
                        if (existingCat == null)
                        {
                            await _unitOfWork.Categories.AddAsync(cat);
                        }
                        else
                        {
                            cat.Id = existingCat.Id;
                        }
                    }
                    await _unitOfWork.SaveAsync();
                }

                var finalExistingCheck = await _unitOfWork.Videos.GetVideosByChannelIdAsync(channel.Id);
                var finalExistingIds = new HashSet<string>(finalExistingCheck.Select(v => v.VideoId));

                foreach (var video in videosToAdd)
                {
                    if (finalExistingIds.Contains(video.VideoId))
                    {
                        continue;
                    }

                    if (video.Category.Id != 0)
                    {
                        video.CategoryId = video.Category.Id;
                        video.Category = null;
                    }

                    await _unitOfWork.Videos.AddAsync(video);
                }

                await _unitOfWork.SaveAsync();
            }
            catch (Google.GoogleApiException ex) when (ex.Error.Code == 403 && (ex.Message.Contains("quota") || ex.Message.Contains("limit")))
            {
                Console.WriteLine($"[STOP] YouTube Quota Exceeded for {channelUrl}. Stopping job to prevent retries.");
                return;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[ERROR] Failed processing {channelUrl}: {ex.Message}");
            }
        }

        public async Task<CategorizedVideosDto> GetCategorizedVideosAsync()
        {
            var videos = await _unitOfWork.Videos.GetAllWithDetailsAsync();

            var groupedByCategory = videos
                .GroupBy(v => v.Category.Label)
                .Select(g => new CategoryDto
                {
                    Id = g.First().Category.Id,
                    Label = g.Key,
                    Videos = g.Select(v => new VideoDto
                    {
                        Id = v.Id,
                        VideoId = v.VideoId,
                        Title = v.Title,
                        Description = v.Description,
                        ChannelName = v.Channel.Name,
                        CategoryLabel = v.Category.Label
                    }).ToList()
                })
                // Sort: Categorized first (excluding "Uncategorized"), then "Uncategorized" last
                .OrderBy(c => c.Label == "Uncategorized" ? 1 : 0) // "Uncategorized" gets 1, others get 0
                .ThenBy(c => c.Label)
                .ToList();

            return new CategorizedVideosDto { Categories = groupedByCategory };
        }
    }
}