import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStats } from '../../../../core/models/video.model';

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-bar.component.html',
  styleUrls: ['./stats-bar.component.scss'],
})
export class StatsBarComponent {
  @Input() stats: DashboardStats = {
    totalVideos: 0,
    totalCategories: 0,
    totalChannels: 0,
  };
}
