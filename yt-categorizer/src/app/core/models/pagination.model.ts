export interface PaginationConfig {
  pageSize: number;
  currentPage: number;
  totalItems: number;
}

export interface PaginatedData<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}
