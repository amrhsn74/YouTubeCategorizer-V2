import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {
  AuthResponse,
  AuthUser,
  SignInRequest,
  SignUpRequest,
} from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = '/api/auth';
  private readonly tokenStorageKey = 'ytc_auth_token';
  private readonly userStorageKey = 'ytc_auth_user';
  private readonly tokenExpiryStorageKey = 'ytc_auth_token_expiry';

  private readonly _currentUser = signal<AuthUser | null>(null);

  constructor(private readonly http: HttpClient) {
    this.restoreSession();
  }

  readonly currentUser = this._currentUser.asReadonly();

  signUp(payload: SignUpRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/signup`, payload)
      .pipe(tap((response) => this.persistSession(response)));
  }

  signIn(payload: SignInRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/signin`, payload)
      .pipe(tap((response) => this.persistSession(response)));
  }

  signOut(): void {
    this.clearSession();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenStorageKey);
    const expiryRaw = localStorage.getItem(this.tokenExpiryStorageKey);

    if (!token || !expiryRaw) {
      return false;
    }

    const expiry = Date.parse(expiryRaw);
    if (Number.isNaN(expiry) || expiry <= Date.now()) {
      this.clearSession();
      return false;
    }

    return true;
  }

  getToken(): string | null {
    if (!this.isAuthenticated()) {
      return null;
    }

    return localStorage.getItem(this.tokenStorageKey);
  }

  private persistSession(response: AuthResponse): void {
    localStorage.setItem(this.tokenStorageKey, response.token);
    localStorage.setItem(this.userStorageKey, JSON.stringify(response.user));
    localStorage.setItem(this.tokenExpiryStorageKey, response.expiresAtUtc);
    this._currentUser.set(response.user);
  }

  private restoreSession(): void {
    if (!this.isAuthenticated()) {
      this.clearSession();
      return;
    }

    const userRaw = localStorage.getItem(this.userStorageKey);
    if (!userRaw) {
      this.clearSession();
      return;
    }

    try {
      const parsedUser = JSON.parse(userRaw) as AuthUser;
      if (!parsedUser?.email || !parsedUser?.fullName || !parsedUser?.id) {
        this.clearSession();
        return;
      }

      this._currentUser.set(parsedUser);
    } catch {
      this.clearSession();
    }
  }

  private clearSession(): void {
    localStorage.removeItem(this.tokenStorageKey);
    localStorage.removeItem(this.userStorageKey);
    localStorage.removeItem(this.tokenExpiryStorageKey);
    this._currentUser.set(null);
  }
}
