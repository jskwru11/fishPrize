import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FishService {
  private baseUrl = 'http://localhost:3000/api/v1/';

  constructor(private http: HttpClient) { }

  getFish() {
    return this.http.get(`${this.baseUrl}fish`);
  }

  createFish(payload) {
    return this.http.post(`${this.baseUrl}fish`, payload);
  }
}
