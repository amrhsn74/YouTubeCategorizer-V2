import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  /**
   * Paginate items and return the current page
   */
  paginate<T>(items: T[], pageNumber: number, pageSize: number): T[] {
    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;
    return items.slice(start, end);
  }

  /**
   * Calculate total pages
   */
  getTotalPages(totalItems: number, pageSize: number): number {
    return Math.ceil(totalItems / pageSize);
  }

  /**
   * Generate page numbers to display in pagination controls
   */
  getPageNumbers(
    currentPage: number,
    totalPages: number,
    maxButtons: number = 5
  ): (number | string)[] {
    const pages: (number | string)[] = [];

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const halfRange = Math.floor(maxButtons / 2);

      let start = Math.max(1, currentPage - halfRange);
      let end = Math.min(totalPages, start + maxButtons - 1);

      if (end - start < maxButtons - 1) {
        start = Math.max(1, end - maxButtons + 1);
      }

      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push('...');
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  }
}
