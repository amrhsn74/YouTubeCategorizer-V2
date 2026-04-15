import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoService } from '../../../../core/services/video.service';
import { ChannelInputDto, StatusMessage } from '../../../../core/models/video.model';

@Component({
  selector: 'app-channel-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './channel-input.component.html',
  styleUrls: ['./channel-input.component.scss'],
})
export class ChannelInputComponent {
  /** Emitted after a successful process job is queued. */
  @Output() jobQueued = new EventEmitter<void>();

  channelUrl1 = '';
  channelUrl2 = '';
  channelUrl3 = '';

  isLoading = false;
  status: StatusMessage | null = null;

  constructor(private videoService: VideoService) {}

  submit(): void {
    if (!this.channelUrl1 && !this.channelUrl2 && !this.channelUrl3) {
      this.status = { type: 'error', text: 'Please enter at least one YouTube channel URL.' };
      return;
    }

    const payload: ChannelInputDto = {
      channelUrl1: this.channelUrl1.trim(),
      channelUrl2: this.channelUrl2.trim(),
      channelUrl3: this.channelUrl3.trim(),
    };

    this.isLoading = true;
    this.status = { type: 'info', text: 'Sending channels to AI categorization engine…' };

    this.videoService.processChannels(payload).subscribe({
      next: () => {
        this.isLoading = false;
        this.status = {
          type: 'success',
          text: 'Job queued! Allow 1–2 minutes for AI processing, then click "Load Results".',
        };
        this.jobQueued.emit();
      },
      error: (err) => {
        this.isLoading = false;
        this.status = {
          type: 'error',
          text: 'Error: ' + (err?.message ?? 'Unknown server error'),
        };
      },
    });
  }
}
