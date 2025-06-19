import { Component } from '@angular/core';
import { LogService } from '../../../core/services/log.service';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  info: string;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    // this.info = this.logService.getData();
    this.logService.message$.subscribe((d) => {
      this.info = d;
    });
  }

  setinfo() {
    this.logService.setData('changement de navbar');
  }
}
