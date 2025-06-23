import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../core/services/log.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../core/store/appstore';
import { selectCounterValue } from '../../../core/store/counterselector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  counter$:Observable<number>;
  info:string
  constructor( public logService:LogService, public authService:AuthService, private store:Store<{Counter:AppStore}>){
    this.counter$=store.select(selectCounterValue);
  }
  ngOnInit(): void {
   this.info=this.logService.getdata();
  
   this.logService.message$.subscribe(s=>{
    this.info=s;
   })
  }

  setinfo()
  {
    this.logService.setData('changement de navbar')
  }

  signout()
  {
    this.authService.signOut()
  }
}
