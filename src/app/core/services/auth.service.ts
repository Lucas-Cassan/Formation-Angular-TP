import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthentificate:boolean = false;

  constructor() {}

  signIn(request:LoginRequest){
    if(request.login === 'admin' && request.password === 'admin'){
      this.isAuthentificate = true;
      sessionStorage.setItem('auth', this.isAuthentificate+'');
    } else {
      this.isAuthentificate = false;
      sessionStorage.removeItem('auth');
    }
    console.log("-signIn",this.isAuthentificate)
  }

  signOut(){
    this.isAuthentificate = false;
    sessionStorage.removeItem('auth');
    console.log("-signOut",sessionStorage.getItem('auth'))
  }

  checkAuthentificate(){
    let a = sessionStorage.getItem('auth');
    return a;
  }
}
