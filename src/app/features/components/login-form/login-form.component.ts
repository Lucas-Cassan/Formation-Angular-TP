import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { LoginRequest } from '../../../core/models/loginRequest';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  msg:string = '';
  loginForm: FormGroup;
  constructor(private bf: FormBuilder, private AuthService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.bf.group({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    let d:LoginRequest;
    d= this.loginForm.value
    this.AuthService.signIn(d);
    this.msg = this.AuthService.checkAuthentificate() ? 'Connexion réussie' : 'Connexion échouée';
  }
}
