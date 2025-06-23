import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  let st = inject(AuthService).checkAuthentificate();
  if(st){
    return true;
  }
  inject(Router).navigate(['/signin']);
  return false;
};
