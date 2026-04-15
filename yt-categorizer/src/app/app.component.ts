import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="app-shell">
      <app-sidebar />
      <div class="main">
        <router-outlet />
      </div>
    </div>
  `,
  styles: [`
    .app-shell {
      display: flex;
      height: 100vh;
      width: 100%;
      overflow: hidden;
    }
    .main {
      flex: 1;
      min-width: 0;
      height: 100vh;
      overflow-y: auto;
      position: relative;
      z-index: 1;
    }
  `]
})
export class AppComponent {}
