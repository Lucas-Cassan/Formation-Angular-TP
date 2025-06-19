import {Component, OnInit, Input} from '@angular/core';
import {Quiz} from '../../../core/models/quiz';
import {quizdata} from '../../../core/data/quizdata';
import {csharp} from '../../../core/data/csharp';
import {QuestionComponent} from '../question/question.component';
import {PaginationComponent} from '../../../share/components/pagination/pagination.component';
import {DisplayComponent} from '../../../share/components/display/display.component';
import {FormsModule} from '@angular/forms';
import {QuizConfigComponent} from '../quiz-config/quiz-config.component';
import {ColorDisplayDirective} from '../../../share/directives/color-display.directive';
import {TestPipe} from '../../../share/pipes/test.pipe';
import {QuestionPipe} from '../../../share/pipes/question.pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  imports: [
    QuestionComponent,
    PaginationComponent,
    DisplayComponent,
    FormsModule,
    QuizConfigComponent,
    ColorDisplayDirective,
    TestPipe,
    QuestionPipe
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  data: Quiz;
  currentQuestion: number = 0;
  displayMode: string = 'Quiz';
  date: Date;
  remainingTime: number;
  quizId: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.quizId = params['quizId'];
      switch (this.quizId) {
        case 'aspnet':
          this.data = new Quiz(quizdata);
          break;
        case 'csharp':
          this.data = new Quiz(csharp);
      }
    });
  }

  ngOnInit(): void {
    this.data = new Quiz(quizdata);
    this.remainingTime = this.data.config.duration * 60; // Convertir en secondes

    setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        this.displayMode = 'Submit';
      }
    }, 1000);
  }

  getFormattedTime(): string {
    const minutes = Math.floor(this.remainingTime / 60);
    const seconds = this.remainingTime % 60;
    return `${minutes}m ${seconds}s`;
  }

  ChangePage(page: any) {
    this.currentQuestion = page;
    console.log(page)
  }

  getDisplayMode(mode: any) {
    this.displayMode = mode;
  }

  scoreQuiz() {
    let s = 0;
    this.data.questions.forEach(q => {
      if (q.isCorrect()) {
        s++;
      }
    })
    return s*100/this.data.questions.length * 100;
  }

  protected readonly QuestionPipe = QuestionPipe;
}
