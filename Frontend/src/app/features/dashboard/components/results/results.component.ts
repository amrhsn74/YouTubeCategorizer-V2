import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorizedVideosDto, FlatVideo } from '../../../../core/models/video.model';
import { CategoryService } from '../../../../core/services/category.service';
import { VideoCardComponent } from '../video-card/video-card.component';
import { PaginationComponent } from '../pagination/pagination.component';

interface CategoryGroup {
  label: string;
  colorClass: string;
  totalCount: number;
  videos: FlatVideo[];
}

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, VideoCardComponent, PaginationComponent],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnChanges {
  /** Raw API response; null = not yet loaded, undefined = loading in progress. */
  @Input() data: CategorizedVideosDto | null = null;
  @Input() isLoading = false;

  /** Emitted when the user clicks "Load Results". */
  @Output() loadRequested = new EventEmitter<void>();

  readonly perPage = 10;
  currentPage = 1;

  private allVideos: FlatVideo[] = [];
  groups: CategoryGroup[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.buildGroups();
    }
  }

  // ── Derived state ─────────────────────────────────────────────────────────

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.allVideos.length / this.perPage));
  }

  get hasResults(): boolean {
    return this.allVideos.length > 0;
  }

  get showPagination(): boolean {
    return this.hasResults && this.totalPages > 1;
  }

  get skeletonRows(): number[] {
    return [1, 2, 3];
  }

  // ── Pagination ─────────────────────────────────────────────────────────────

  onPageChange(page: number): void {
    this.currentPage = page;
    this.buildPageGroups();
  }

  // ── Internal helpers ───────────────────────────────────────────────────────

  private buildGroups(): void {
    this.allVideos = [];
    const channelSet = new Set<string>();

    if (this.data?.categories?.length) {
      for (const cat of this.data.categories) {
        for (const v of cat.videos) {
          this.allVideos.push({ ...v, categoryLabel: cat.label });
          channelSet.add(v.channelName);
        }
      }
    }

    this.allVideos.sort((a, b) => a.categoryLabel.localeCompare(b.categoryLabel));
    this.currentPage = 1;
    this.buildPageGroups();
  }

  private buildPageGroups(): void {
    const start = (this.currentPage - 1) * this.perPage;
    const slice = this.allVideos.slice(start, start + this.perPage);

    // Group the current page slice by category, preserving order
    const map = new Map<string, FlatVideo[]>();
    for (const v of slice) {
      if (!map.has(v.categoryLabel)) map.set(v.categoryLabel, []);
      map.get(v.categoryLabel)!.push(v);
    }

    this.groups = Array.from(map.entries()).map(([label, videos]) => ({
      label,
      colorClass: this.categoryService.getColorClass(label),
      totalCount: this.allVideos.filter(v => v.categoryLabel === label).length,
      videos,
    }));
  }
}
