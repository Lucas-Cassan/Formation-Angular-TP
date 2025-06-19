import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  data = 'hi everyone';
  message = new BehaviorSubject(this.data);
  message$ = this.message.asObservable();

  constructor() {}

  getdata() {
    return this.message.getValue();
  }

  setData(s: string) {
    this.message.next(s);
  }

  logged() {
    sessionStorage.setItem('info', 'information');
  }
}
