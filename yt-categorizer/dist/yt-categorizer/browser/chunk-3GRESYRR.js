import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-RBZGX75M.js";

// src/app/core/services/pagination.service.ts
var PaginationService = class _PaginationService {
  /**
   * Paginate items and return the current page
   */
  paginate(items, pageNumber, pageSize) {
    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;
    return items.slice(start, end);
  }
  /**
   * Calculate total pages
   */
  getTotalPages(totalItems, pageSize) {
    return Math.ceil(totalItems / pageSize);
  }
  /**
   * Generate page numbers to display in pagination controls
   */
  getPageNumbers(currentPage, totalPages, maxButtons = 5) {
    const pages = [];
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
        if (start > 2)
          pages.push("...");
      }
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (end < totalPages) {
        if (end < totalPages - 1)
          pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  }
  static {
    this.\u0275fac = function PaginationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaginationService, factory: _PaginationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  PaginationService
};
//# sourceMappingURL=chunk-3GRESYRR.js.map
