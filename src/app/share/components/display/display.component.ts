import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  @Input()
  displayMode: any;

  @Input()
  class: string;

  @Output()
  notifChange = new EventEmitter<any>();

  changeDisplayMode(mode: string): void {
    this.displayMode = mode;
    console.log('Display mode changed to:', this.displayMode);
    this.notifChange.emit(this.displayMode);
  }
}
