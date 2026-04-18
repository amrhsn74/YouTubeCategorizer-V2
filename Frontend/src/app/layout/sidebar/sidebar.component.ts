import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  badge?: string;
  icon: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  readonly navSections: NavSection[] = [
    {
      title: 'Main',
      items: [
        {
          label: 'Dashboard',
          route: '/',
          icon: 'M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z',
        },
        {
          label: 'Results',
          route: '/results',
          icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
        },
        {
          label: 'Videos',
          route: '/videos',
          icon: 'M23 7l-7 5 7 5V7zM1 5h15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H1a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z',
        },
        {
          label: 'Channels',
          route: '/channels',
          icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7.73-1a4 4 0 0 1 0 7.75M23 21v-2a4 4 0 0 0-3-3.87',
        },
      ],
    },
    {
      title: 'Analytics',
      items: [
        {
          label: 'Reports',
          route: '/reports',
          icon: 'M18 20V10M12 20V4M6 20v-6',
        },
      ],
    },
  ];
}
