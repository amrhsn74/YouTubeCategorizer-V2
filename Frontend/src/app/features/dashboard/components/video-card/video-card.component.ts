import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatVideo } from '../../../../core/models/video.model';
import { CategoryService } from '../../../../core/services/category.service';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent {
  @Input({ required: true }) video!: FlatVideo;

  constructor(public categoryService: CategoryService) {}

  get colorClass(): string {
    return this.categoryService.getColorClass(this.video.categoryLabel);
  }

  get emoji(): string {
    return this.categoryService.getEmoji(this.video.categoryLabel);
  }

  get channelColorStyle(): Record<string, string> {
    return this.categoryService.getChannelColorStyle(this.video.channelName);
  }
}
