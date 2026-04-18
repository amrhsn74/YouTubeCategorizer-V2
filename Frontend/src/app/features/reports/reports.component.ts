import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService } from '../../core/services/video.service';
import { CategorizedVideosDto } from '../../core/models/video.model';
import { finalize } from 'rxjs/operators';

interface CategoryReport {
  label: string;
  videoCount: number;
  channelCount: number;
  percentage: number;
}

interface ReportMetrics {
  totalVideos: number;
  totalChannels: number;
  totalCategories: number;
  categorizedVideos: number;
  uncategorizedVideos: number;
  categorization: number;
  avgVideosPerCategory: number;
  avgVideosPerChannel: number;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  loading = false;
  error = false;
  metrics: ReportMetrics | null = null;
  categoryReports: CategoryReport[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(forceRefresh = false): void {
    this.loading = true;
    this.error = false;

    this.videoService.getCategorizedVideos(forceRefresh)
      .pipe(finalize(() => { this.loading = false; }))
      .subscribe({
        next: (data) => { this.calculateMetrics(data); },
        error: () => { this.error = true; },
      });
  }

  private calculateMetrics(data: CategorizedVideosDto): void {
    let totalVideos = 0, categorizedVideos = 0, uncategorizedVideos = 0;
    const channelSet = new Set<string>();
    const reportMap = new Map<string, { count: number; channels: Set<string> }>();

    (data?.categories ?? []).forEach((cat) => {
      const label = cat.label ?? '';
      const count = cat.videos?.length ?? 0;
      totalVideos += count;

      if (label === 'Uncategorized') uncategorizedVideos += count;
      else categorizedVideos += count;

      (cat.videos ?? []).forEach((v) => channelSet.add(v.channelName ?? ''));

      if (!reportMap.has(label)) reportMap.set(label, { count: 0, channels: new Set() });
      const r = reportMap.get(label)!;
      r.count += count;
      (cat.videos ?? []).forEach((v) => r.channels.add(v.channelName ?? ''));
    });

    const totalCategories = reportMap.size;
    const totalChannels = channelSet.size;

    this.metrics = {
      totalVideos,
      totalChannels,
      totalCategories,
      categorizedVideos,
      uncategorizedVideos,
      categorization: totalVideos > 0 ? Math.round((categorizedVideos / totalVideos) * 100) : 0,
      avgVideosPerCategory: totalCategories > 0 ? Math.round(totalVideos / totalCategories) : 0,
      avgVideosPerChannel: totalChannels > 0 ? Math.round(totalVideos / totalChannels) : 0,
    };

    this.categoryReports = Array.from(reportMap.entries())
      .map(([label, d]) => ({
        label,
        videoCount: d.count,
        channelCount: d.channels.size,
        percentage: totalVideos > 0 ? Math.round((d.count / totalVideos) * 100) : 0,
      }))
      .sort((a, b) => b.videoCount - a.videoCount);
  }

  getBarColor(pct: number): string {
    if (pct >= 50) return 'var(--primary)';
    if (pct >= 25) return 'var(--secondary)';
    return 'var(--primary-light)';
  }
}
