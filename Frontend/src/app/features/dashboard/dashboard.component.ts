import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelInputComponent } from './components/channel-input/channel-input.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChannelInputComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  onJobQueued(): void {
    this.router.navigate(['/results']);
  }
}
