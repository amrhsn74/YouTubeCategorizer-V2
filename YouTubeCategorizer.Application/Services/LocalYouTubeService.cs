using Google.Apis.Services;
using Google.Apis.YouTube.v3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YouTubeCategorizer.Application.DTOs;

namespace YouTubeCategorizer.Application.Services
{
    public interface IYouTubeService
    {
        Task<(string channelId, string channelName)> GetChannelInfoAsync(string channelUrl);
        Task<List<(string videoId, string title, string description)>> GetChannelVideosAsync(string channelId);
    }

    // CHANGE: Class renamed from YouTubeService to LocalYouTubeService
    public class LocalYouTubeService : IYouTubeService
    {
        private readonly string _apiKey;

        public LocalYouTubeService(string apiKey)
        {
            _apiKey = apiKey;
        }

        public async Task<(string channelId, string channelName)> GetChannelInfoAsync(string channelUrl)
        {
            var youtubeService = new Google.Apis.YouTube.v3.YouTubeService(new BaseClientService.Initializer()
            {
                ApiKey = _apiKey
            });

            var identifier = ExtractChannelIdentifier(channelUrl);
            var request = youtubeService.Channels.List("snippet");

            if (identifier.StartsWith("@"))
            {
                request.ForHandle = identifier;
            }
            else
            {
                request.Id = identifier;
            }

            var response = await request.ExecuteAsync();

            if (response.Items != null && response.Items.Count > 0)
            {
                var channel = response.Items[0];
                return (channel.Id, channel.Snippet.Title);
            }

            throw new Exception($"Channel not found for identifier: {identifier}");
        }

        public async Task<List<(string videoId, string title, string description)>> GetChannelVideosAsync(string channelId)
        {
            var youtubeService = new Google.Apis.YouTube.v3.YouTubeService(new BaseClientService.Initializer()
            {
                ApiKey = _apiKey
            });

            var channelRequest = youtubeService.Channels.List("contentDetails");
            channelRequest.Id = channelId;
            var channelResponse = await channelRequest.ExecuteAsync();

            if (channelResponse.Items == null || channelResponse.Items.Count == 0) return new List<(string, string, string)>();

            var uploadsPlaylistId = channelResponse.Items[0].ContentDetails.RelatedPlaylists.Uploads;

            var videos = new List<(string, string, string)>();
            string nextPageToken = null;

            do
            {
                var playlistRequest = youtubeService.PlaylistItems.List("snippet");
                playlistRequest.PlaylistId = uploadsPlaylistId;
                playlistRequest.MaxResults = 50;
                playlistRequest.PageToken = nextPageToken;

                var playlistResponse = await playlistRequest.ExecuteAsync();

                if (playlistResponse.Items != null)
                {
                    foreach (var item in playlistResponse.Items)
                    {
                        videos.Add((
                            item.Snippet.ResourceId.VideoId,
                            item.Snippet.Title,
                            item.Snippet.Description ?? ""
                        ));
                    }
                }

                nextPageToken = playlistResponse.NextPageToken;

            } while (nextPageToken != null && videos.Count < 50);

            return videos;
        }

        private string ExtractChannelIdentifier(string channelUrl)
        {
            var uri = new Uri(channelUrl);
            var segments = uri.AbsolutePath.Split('/', StringSplitOptions.RemoveEmptyEntries);

            if (segments.Any(s => s.StartsWith("@")))
            {
                return segments.First(s => s.StartsWith("@"));
            }

            if (segments.Contains("channel"))
            {
                return segments[Array.IndexOf(segments, "channel") + 1];
            }

            return segments.Last();
        }
    }
}