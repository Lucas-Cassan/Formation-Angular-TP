import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Option} from '../../../core/models/option';

@Component({
  selector: 'app-option',
  imports: [
    FormsModule
  ],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {
  @Input()
  oData: Option;

  @Input()
  displayMode: string;
}
