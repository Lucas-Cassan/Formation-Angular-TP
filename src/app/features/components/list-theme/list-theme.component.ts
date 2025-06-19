import { Component, Input } from '@angular/core';
import { ThemeComponent } from '../theme/theme.component';
import { themedata } from '../../../core/data/themedata';
import { PaginationComponent } from '../../../share/components/pagination/pagination.component';

@Component({
  selector: 'app-list-theme',
  imports: [ThemeComponent, PaginationComponent],
  templateUrl: './list-theme.component.html',
  styleUrl: './list-theme.component.css',
})
export class ListThemeComponent {
  p: number = 0;
  dataTheme = themedata;

  getp(x: any) {
    console.log(x);
    this.p = x * 3;
  }
}
