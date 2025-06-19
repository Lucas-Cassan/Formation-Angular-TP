import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColorDisplay]'
})
export class ColorDisplayDirective implements OnInit {

  @Input('appColorDisplay')
  defaultColor: string;

  constructor(private element: ElementRef, private render: Renderer2) {
  }

  ngOnInit(): void {
    this.render.setStyle(this.element.nativeElement, "color", this.defaultColor);
    this.render.setStyle(this.element.nativeElement, "fontWeight", "bold");
    this.render.setStyle(this.element.nativeElement, "transition", "color 0.5s ease");
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter() {
    this.render.setStyle(this.element.nativeElement, "color", "orange");
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    this.render.setStyle(this.element.nativeElement, "color", this.defaultColor);
  }
}
