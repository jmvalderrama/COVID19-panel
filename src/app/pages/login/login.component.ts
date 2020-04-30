import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading: boolean;
  btnText: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.isLoading = false;
    this.btnText = 'Iniciar sesión';
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
    
  }

  login(): void {
    this.router.navigate(['/home']);
  }

}
