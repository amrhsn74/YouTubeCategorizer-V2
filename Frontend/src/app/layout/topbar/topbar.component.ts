import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  /** Emitted when the user clicks the "Refresh" button in the topbar. */
  @Output() refresh = new EventEmitter<void>();

  /** Emitted when the user clicks the "New Job" button. */
  @Output() newJob = new EventEmitter<void>();

  openResultsInNewTab(): void {
    window.open('/results', '_blank');
  }
}
