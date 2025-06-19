import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Quiz1Component} from './features/components/quiz1/quiz1.component';
import {QuizComponent} from './features/components/quiz/quiz.component';
import {NavBarComponent} from './share/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quizappobs1';
}
