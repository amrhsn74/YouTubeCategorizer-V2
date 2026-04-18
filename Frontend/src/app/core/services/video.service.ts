import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, timeout } from 'rxjs/operators';
import { CategorizedVideosDto, ChannelInputDto } from '../models/video.model';

@Injectable({ providedIn: 'root' })
export class VideoService {
  private readonly baseUrl = '/api/Videos';
  private cachedData: CategorizedVideosDto | null = null;

  constructor(private http: HttpClient) {}

  processChannels(input: ChannelInputDto): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/process`, input);
  }

  getCategorizedVideos(forceRefresh = false): Observable<CategorizedVideosDto> {
    if (!forceRefresh && this.cachedData) {
      return of(this.cachedData);
    }
    return this.http.get<CategorizedVideosDto>(`${this.baseUrl}/categorized`)
      .pipe(
        timeout(15000),
        tap(data => { this.cachedData = data; })
      );
  }

  clearCache(): void {
    this.cachedData = null;
  }
}
