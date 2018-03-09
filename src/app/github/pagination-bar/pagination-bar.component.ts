import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationBarComponent {
  @Input() totalPages = 1;
  @Input() arrowsOnly = false;
  @Input()
  set current(value: number) {
    this.currentPage = value;
  }

  @Output() pageChange = new EventEmitter<number>();

  private currentPage = 1;

  /**
   * Creates a new array to be iterated in.
   */
  public get pages(): Array<number> {
    if (this.arrowsOnly) {
      return [this.currentPage];
    }
    const length = this.totalPages;
    return Array.from({ length }).map((_, i) => i + 1);
  }

  onClickPage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

  onClickPrevious() {
    this.currentPage--;
    this.pageChange.emit(this.currentPage);
  }

  onClickNext() {
    this.currentPage++;
    this.pageChange.emit(this.currentPage);
  }

  getAriaLabelForPage(page) {
    return `Page ${page}`;
  }

  hasPrevious() {
    return this.currentPage > 1;
  }

  hasNext() {
    return this.arrowsOnly || this.currentPage < this.totalPages;
  }

  isPageActive(page) {
    return this.currentPage === page;
  }
}
