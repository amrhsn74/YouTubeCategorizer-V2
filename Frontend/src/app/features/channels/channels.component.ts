import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoService } from '../../core/services/video.service';
import { PaginationService } from '../../core/services/pagination.service';
import { CategorizedVideosDto } from '../../core/models/video.model';
import { finalize } from 'rxjs/operators';

interface ChannelSummary {
  name: string;
  totalVideos: number;
  categories: Set<string>;
  categorizedCount: number;
  uncategorizedCount: number;
}

@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
})
export class ChannelsComponent implements OnInit {
  channels: ChannelSummary[] = [];
  loading = false;
  error = false;

  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pageNumbers: (number | string)[] = [];
  paginatedChannels: ChannelSummary[] = [];

  searchText = '';
  filteredChannels: ChannelSummary[] = [];

  constructor(
    private videoService: VideoService,
    private paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(forceRefresh = false): void {
    this.loading = true;
    this.error = false;

    this.videoService.getCategorizedVideos(forceRefresh)
      .pipe(finalize(() => { this.loading = false; }))
      .subscribe({
        next: (data) => {
          this.extractChannelData(data);
          this.filteredChannels = [...this.channels];
          this.updatePagination();
        },
        error: () => { this.error = true; },
      });
  }

  private extractChannelData(data: CategorizedVideosDto): void {
    const map = new Map<string, ChannelSummary>();

    (data?.categories ?? []).forEach((cat) => {
      (cat.videos ?? []).forEach((video) => {
        const name = video.channelName ?? 'Unknown';
        if (!map.has(name)) {
          map.set(name, { name, totalVideos: 0, categories: new Set(), categorizedCount: 0, uncategorizedCount: 0 });
        }
        const ch = map.get(name)!;
        ch.totalVideos++;
        ch.categories.add(cat.label ?? '');
        if ((cat.label ?? '') !== 'Uncategorized') ch.categorizedCount++;
        else ch.uncategorizedCount++;
      });
    });

    this.channels = Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
  }

  updatePagination(): void {
    this.totalPages = this.paginationService.getTotalPages(this.filteredChannels.length, this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
    this.pageNumbers = this.paginationService.getPageNumbers(this.currentPage, this.totalPages);
    this.paginatedChannels = this.paginationService.paginate(this.filteredChannels, this.currentPage, this.pageSize);
  }

  goToPage(page: number | string): void {
    if (typeof page === 'number') {
      this.currentPage = page;
      this.updatePagination();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextPage(): void { if (this.currentPage < this.totalPages) this.goToPage(this.currentPage + 1); }
  prevPage(): void { if (this.currentPage > 1) this.goToPage(this.currentPage - 1); }

  applyFilter(): void {
    this.currentPage = 1;
    const q = this.searchText.toLowerCase();
    this.filteredChannels = this.channels.filter((ch) => ch.name.toLowerCase().includes(q));
    this.updatePagination();
  }

  getCategoryList(channel: ChannelSummary): string[] {
    return Array.from(channel.categories);
  }

  getCompletionPercentage(channel: ChannelSummary): number {
    if (channel.totalVideos === 0) return 0;
    return Math.round((channel.categorizedCount / channel.totalVideos) * 100);
  }

  getStatusColor(pct: number): string {
    if (pct === 100) return 'var(--success)';
    if (pct >= 75) return '#D97706';
    if (pct >= 50) return '#F59E0B';
    return 'var(--danger)';
  }
}
