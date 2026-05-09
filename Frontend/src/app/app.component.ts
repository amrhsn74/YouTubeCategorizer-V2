import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
import { AuthService } from './core/services/auth.service';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="app-shell" [class.auth-shell]="isAuthPage()">
      @if (!isAuthPage()) {
        <app-sidebar />
      }
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
    .auth-shell {
      display: block;
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
export class AppComponent {
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.url),
      startWith(this.router.url)
    ),
    { initialValue: this.router.url }
  );

  readonly showSidebar = computed(() => {
    const isAuthRoute = this.currentUrl().startsWith('/auth');
    const isSignedIn = !!this.authService.currentUser();
    return isSignedIn && !isAuthRoute;
  });

  readonly isAuthPage = computed(() => !this.showSidebar());
}
