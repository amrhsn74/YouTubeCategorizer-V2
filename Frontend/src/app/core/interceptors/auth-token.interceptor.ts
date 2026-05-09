import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const normalizedUrl = request.url.toLowerCase();
    const isApiRequest = normalizedUrl.startsWith('/api/');
    const isAuthRequest = normalizedUrl.startsWith('/api/auth/');

    if (!isApiRequest || isAuthRequest) {
      return next.handle(request);
    }

    const token = this.authService.getToken();
    if (!token) {
      return next.handle(request);
    }

    const authRequest = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    return next.handle(authRequest);
  }
}
