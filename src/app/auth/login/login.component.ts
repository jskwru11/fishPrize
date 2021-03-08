import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private as: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    })
  }

  onLogin() {
    this.as.login(this.loginForm.value).subscribe(userData => {
      
      if (userData.status === 'fail') return new Error('Unable to login user.  Please try again.');

      this.router.navigate(['dashboard']);
    });
  }

}
