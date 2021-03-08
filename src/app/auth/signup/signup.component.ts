import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private as: AuthService,
      private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    });
  }

  onSignup() {
    this.as.signup(this.signupForm.value)
      .subscribe(userData => {
        if (userData.status === 'fail') return new Error('Unable to signup new user.  Please try again.');

        this.router.navigate(['dashboard']);
      });

      
  }

}
