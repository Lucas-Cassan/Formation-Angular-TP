import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../../core/models/quiz';
import { Option } from '../../core/models/option';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {

  dataquiz:Quiz=new Quiz(
    {id:0,'name':'','description':'',questions:[
      {id:0,'name':'','questionTypeId':0,options:[{id:0,'name':'','isAnswer':false}]}]});

  fdata=new BehaviorSubject(this.dataquiz);

  fdata$ =this.fdata.asObservable()
  constructor() { 
    console.log(this.dataquiz)
  }

   getcurrentdata()
  {
    return this.fdata.getValue();
  }
  
  updatedata(what:string,...args:any)
  {
    switch (what) {
      case 'option':
        
        this.dataquiz.questions[args[1]].options.push(new Option(args[0]))
        break;
     case 'question':
      this.dataquiz.questions.push(args[0])
     break
      default:
        break;
    }
    this.fdata.next(this.dataquiz)
  }


}
