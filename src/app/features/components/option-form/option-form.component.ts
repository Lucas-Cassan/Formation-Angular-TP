import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormdataService } from '../../../shared/services/formdata.service';

@Component({
  selector: 'obs-option-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './option-form.component.html',
  styleUrl: './option-form.component.css'
})
export class OptionFormComponent implements OnInit {
 
  oform:FormGroup;
  
  constructor(public service:FormdataService){}

   ngOnInit(): void {
    this.oform=new FormGroup({
      id:new FormControl(),
      name:new FormControl('', Validators.required),
      isAnswer:new FormControl()
    })
  }
  addoption()
  {
    let idquestion=this.service.getcurrentdata().questions.length-1
    this.service.updatedata('option',this.oform.value,idquestion)
  }
}
