import {Component} from '@angular/core';
import {quizdata} from '../../../core/data/quizdata';
import {Quiz} from '../../../core/models/quiz';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-quiz1',
  imports: [
    FormsModule
  ],
  templateUrl: './quiz1.component.html',
  styleUrl: './quiz1.component.css'
})
export class Quiz1Component {
  data: Quiz = new Quiz(quizdata)
  currentQuestion = 0;
  displayMode = 'quiz';

  goToQuestion(index: number) {
      this.currentQuestion = index;
  }

  changeMode(mode: string) {
    this.displayMode = mode;
  }

  test(o: any) {
    console.log(o)
  }

}
