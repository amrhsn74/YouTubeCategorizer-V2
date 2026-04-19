import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoService } from '../../core/services/video.service';
import { PaginationService } from '../../core/services/pagination.service';
import { CategorizedVideosDto, VideoDto } from '../../core/models/video.model';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, SlicePipe, FormsModule],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit, OnDestroy {
  allVideos: VideoDto[] = [];
  loading = false;
  error = false;
  private cancelRequest$ = new Subject<void>();

  pageSize = 15;
  currentPage = 1;
  totalPages = 0;
  pageNumbers: (number | string)[] = [];
  paginatedVideos: VideoDto[] = [];

  selectedCategory = 'all';
  selectedChannel = 'all';
  searchText = '';
  filteredVideos: VideoDto[] = [];
  categories: string[] = [];
  channels: string[] = [];

  constructor(
    private videoService: VideoService,
    private paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(forceRefresh = false): void {
    this.cancelRequest$.next();
    this.loading = true;
    this.error = false;

    this.videoService.getCategorizedVideos(forceRefresh)
      .pipe(
        takeUntil(this.cancelRequest$),
        finalize(() => { this.loading = false; })
      )
      .subscribe({
        next: (data) => {
          this.extractAllVideos(data);
          this.extractUnique();
          this.filteredVideos = [...this.allVideos];
          this.currentPage = 1;
          this.updatePagination();
        },
        error: () => { this.error = true; },
      });
  }

  ngOnDestroy(): void {
    this.cancelRequest$.next();
    this.cancelRequest$.complete();
  }

  private extractAllVideos(data: CategorizedVideosDto): void {
    this.allVideos = [];
    (data?.categories ?? []).forEach((cat) => {
      this.allVideos.push(...(cat.videos ?? []));
    });
  }

  private extractUnique(): void {
    this.categories = Array.from(new Set(this.allVideos.map((v) => v.categoryLabel ?? '')));
    this.channels = Array.from(new Set(this.allVideos.map((v) => v.channelName ?? '')));
  }

  updatePagination(): void {
    this.totalPages = this.paginationService.getTotalPages(this.filteredVideos.length, this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
    this.pageNumbers = this.paginationService.getPageNumbers(this.currentPage, this.totalPages);
    this.paginatedVideos = this.paginationService.paginate(this.filteredVideos, this.currentPage, this.pageSize);
  }

  goToPage(page: number | string): void {
    if (typeof page === 'number') {
      this.currentPage = page;
      this.updatePagination();
      this.scrollMainToTopSlow();
    }
  }

  nextPage(): void { if (this.currentPage < this.totalPages) this.goToPage(this.currentPage + 1); }
  prevPage(): void { if (this.currentPage > 1) this.goToPage(this.currentPage - 1); }

  onFilterChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  applyFilters(): void {
    const q = this.searchText.toLowerCase();
    this.filteredVideos = this.allVideos.filter((v) => {
      const matchesCat = this.selectedCategory === 'all' || (v.categoryLabel ?? '') === this.selectedCategory;
      const matchesCh = this.selectedChannel === 'all' || (v.channelName ?? '') === this.selectedChannel;
      const matchesSearch =
        !q ||
        (v.title ?? '').toLowerCase().includes(q) ||
        (v.description ?? '').toLowerCase().includes(q);
      return matchesCat && matchesCh && matchesSearch;
    });
    this.updatePagination();
  }

  changePageSize(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.updatePagination();
  }

  private scrollMainToTopSlow(): void {
    const main = document.querySelector<HTMLElement>('.main');
    if (!main) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const start = main.scrollTop;
    if (start <= 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      main.scrollTop = 0;
      return;
    }

    const durationMs = 700;
    const startedAt = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (now: number) => {
      const elapsed = now - startedAt;
      const progress = Math.min(elapsed / durationMs, 1);
      main.scrollTop = Math.round(start * (1 - easeOut(progress)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}
