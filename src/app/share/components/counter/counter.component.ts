import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementer, incrementer } from '../../../core/store/actions';
import { AppStore } from '../../../core/store/appstore';
import { Observable } from 'rxjs';
import { selectCounterValue } from '../../../core/store/counterselector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'obs-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter$:Observable<number>;
constructor(private store:Store<{Counter:AppStore}>){
  this.counter$=store.select(selectCounterValue);
}
decrement()
{
  this.store.dispatch(decrementer())
}
increment()
{
  this.store.dispatch(incrementer())
}
}
