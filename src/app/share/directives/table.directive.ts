import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTable]'
})
export class TableDirective implements OnInit {

  @Input()
  numberOfRows: number;

  @Input()
  numberOfColumns: number;

  constructor(private element: ElementRef, private render: Renderer2) {
  }

  ngOnInit(): void {
    let table = this.render.createElement('table')
    this.render.setProperty(table, 'className', 'table')
    for (let i = 0; i < this.numberOfRows; i++) {
      let tr = this.render.createElement('tr')
      for (let j = 0; j < this.numberOfColumns; j++) {
        let td = this.render.createElement('td')
        this.render.setProperty(td, 'innerHTML', `Cellule ${i + 1}-${j + 1}`)
        this.render.appendChild(tr, td)
      }
      this.render.appendChild(table, tr)
    }
    this.render.appendChild(this.element.nativeElement, table)
  }

}
