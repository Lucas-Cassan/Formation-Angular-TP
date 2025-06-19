import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  page=0;
  @Output()
  notifyChangePage=new EventEmitter<any>();

  @Input()
  minPage : number;

  @Input()
  maxPage : number;

  @Input()
  allowBack: boolean;

  send(page: any) {
    this.page = page
    this.notifyChangePage.emit(page);
  }
}
