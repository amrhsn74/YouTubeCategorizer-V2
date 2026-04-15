import { Component, OnInit } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoService } from '../../core/services/video.service';
import { PaginationService } from '../../core/services/pagination.service';
import { CategorizedVideosDto, CategoryDto } from '../../core/models/video.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, SlicePipe, FormsModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  data: CategorizedVideosDto | null = null;
  loading = false;
  error = false;

  readonly pageSizeOptions = [5, 10, 15, 20];
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pageNumbers: (number | string)[] = [];
  paginatedCategories: CategoryDto[] = [];

  selectedCategory = 'all';
  searchText = '';
  filteredCategories: CategoryDto[] = [];

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
          this.data = data;
          this.applyFilters();
        },
        error: () => {
          this.data = null;
          this.error = true;
        },
      });
  }

  updatePagination(): void {
    this.totalPages = this.paginationService.getTotalPages(this.filteredCategories.length, this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
    this.pageNumbers = this.paginationService.getPageNumbers(this.currentPage, this.totalPages);
    this.paginatedCategories = this.paginationService.paginate(this.filteredCategories, this.currentPage, this.pageSize);
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
  changePageSize(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.updatePagination();
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  applyFilters(): void {
    const cats = this.data?.categories ?? [];
    const q = this.searchText.toLowerCase();

    this.filteredCategories = cats.filter((cat) => {
      const matchesCat = this.selectedCategory === 'all' || (cat.label ?? '') === this.selectedCategory;
      const matchesSearch =
        !q ||
        (cat.label ?? '').toLowerCase().includes(q) ||
        (cat.videos ?? []).some((v) => (v.title ?? '').toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });

    this.updatePagination();
  }

  getCategories(): string[] {
    return (this.data?.categories ?? []).map((c) => c.label ?? '');
  }

  getTotalVideoCount(): number {
    return (this.data?.categories ?? []).reduce((sum, c) => sum + (c.videos?.length ?? 0), 0);
  }

  getStartCategoryIndex(): number {
    if (this.filteredCategories.length === 0) return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  getEndCategoryIndex(): number {
    return Math.min(this.currentPage * this.pageSize, this.filteredCategories.length);
  }

  exportToCSV(): void {
    const cats = this.data?.categories;
    if (!cats?.length) return;
    let csv = 'Category,Title,Channel,Description\n';
    cats.forEach((cat) => {
      (cat.videos ?? []).forEach((v) => {
        csv += `${this.esc(cat.label)},${this.esc(v.title)},${this.esc(v.channelName)},${this.esc(v.description)}\n`;
      });
    });
    const a = document.createElement('a');
    a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    a.download = 'categorized-videos.csv';
    a.click();
  }

  private esc(v: string | null | undefined): string {
    const s = v ?? '';
    return s.includes(',') || s.includes('"') || s.includes('\n') ? `"${s.replace(/"/g, '""')}"` : s;
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
