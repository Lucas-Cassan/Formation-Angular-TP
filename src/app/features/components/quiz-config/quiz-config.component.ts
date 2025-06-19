import {Component, Input} from '@angular/core';
import {QuizConfig} from '../../../core/models/quizconfig';
import {FormsModule} from '@angular/forms';
import {TableDirective} from '../../../share/directives/table.directive';

@Component({
  selector: 'app-quiz-config',
  imports: [
    FormsModule,
    TableDirective
  ],
  templateUrl: './quiz-config.component.html',
  styleUrl: './quiz-config.component.css'
})
export class QuizConfigComponent {

  @Input()
  dataConfig : QuizConfig;
}
