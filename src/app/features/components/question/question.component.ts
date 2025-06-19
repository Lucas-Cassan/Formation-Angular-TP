import {Component, Input} from '@angular/core';
import {Question} from '../../../core/models/questions';
import {FormsModule} from '@angular/forms';
import {OptionComponent} from '../option/option.component';

@Component({
  selector: 'app-question',
  imports: [
    FormsModule,
    OptionComponent
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Input()
  qData: Question;
  @Input()
  numberQuestion: number;
  @Input()
  displayMode: string;

  displayColor() {
    if (this.displayMode == 'Review') {
      if (this.qData.isSelected()) {
       return 'card-header alert alert-info m-0'
      } else {
        return 'card-header alert alert-warning m-0'
      }
    } else {
      if(this.displayMode =='Submit') {
        if (this.qData.isCorrect()) {
          return 'card-header alert alert-success m-0';
        } else {
          return 'card-header alert alert-danger m-0';
        }
      } else {
        return 'card-header';
      }
    }
  }
}
