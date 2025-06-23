import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Quiz } from '../../../core/models/quiz';
import { QuestionFormComponent } from "../question-form/question-form.component";

@Component({
  selector: 'obs-quiz-form',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, QuestionFormComponent],
  templateUrl: './quiz-form.component.html',
  styleUrl: './quiz-form.component.css'
})
export class QuizFormComponent implements OnInit {
  
  v={'id':0,'name':'','description':''}

  qform:FormGroup;
  
  quiz:Quiz;

  ngOnInit(): void {
    
    this.qform=new FormGroup({
          id:new FormControl(),
          name:new FormControl('',Validators.required),
          description:new FormControl()
    })
  }

  send()
  {
    this.quiz=new Quiz(this.qform.value)
    console.log(this.quiz)
    //call api
  }

  onSubmit()
  {
    console.log(this.qform.value)
  }
}
