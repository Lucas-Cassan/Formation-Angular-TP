import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OptionFormComponent } from "../option-form/option-form.component";
import { FormdataService } from '../../../shared/services/formdata.service';
import { Question } from '../../../core/models/questions';
import { Option } from '../../../core/models/option';

@Component({
  selector: 'obs-question-form',
  imports: [ReactiveFormsModule, CommonModule, OptionFormComponent],
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.css'
})
export class QuestionFormComponent implements OnInit {
   
  data:Question;
  questionform:FormGroup
  
   constructor(public service:FormdataService){}
   ngOnInit(): void {
   this.data=new Question('');
    this.questionform=new FormGroup({
          id:new FormControl(),
          name:new FormControl('',Validators.required),
          questionTypeId:new FormControl('',Validators.required)
    })
 
    
  }

 getdata()
    {
      let d1= this.service.getcurrentdata();
      console.log(d1);
     
      
    this.service.fdata$.subscribe(d=>{
       
        
        // this.data.options.push(new Option(d))
         console.log(d)
      })
    }

    addquestion()
    {
      let dq=this.questionform.value;
      let d1= this.service.getcurrentdata();
      let idq=d1.questions.length-1;
      d1.questions[idq].name=dq.name;
      d1.questions[idq].id=dq.id;
      d1.questions[idq].questionTypeId=dq.questionTypeId;
      this.service.updatedata('question',d1.questions[idq])

      console.log(d1)
      
      

    }

}
