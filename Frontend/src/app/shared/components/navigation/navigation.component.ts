import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  navItems = [
    { label: '🏠 Dashboard', path: '/' },
    { label: '📊 Results', path: '/results' },
    { label: '📹 Videos', path: '/videos' },
    { label: '📺 Channels', path: '/channels' },
    { label: '📈 Reports', path: '/reports' },
  ];
}
