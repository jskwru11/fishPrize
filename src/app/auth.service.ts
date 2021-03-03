import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000/api/v1/';

  constructor(private http: HttpClient) { }

  signup(payload) {
    return this.http.post(`${this.baseUrl}users/signup`, payload);
  }

  login(payload) {
    return this.http.post(`${this.baseUrl}users/login`, payload);
  }
}
