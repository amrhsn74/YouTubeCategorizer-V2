import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() currentPage = 1;
  @Input() totalPages = 1;

  @Output() pageChange = new EventEmitter<number>();

  get hasPrev(): boolean { return this.currentPage > 1; }
  get hasNext(): boolean { return this.currentPage < this.totalPages; }

  prev(): void {
    if (this.hasPrev) this.pageChange.emit(this.currentPage - 1);
  }

  next(): void {
    if (this.hasNext) this.pageChange.emit(this.currentPage + 1);
  }
}
