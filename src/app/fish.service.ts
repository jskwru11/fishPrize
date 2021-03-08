import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Fish } from './models/fish.model';

@Injectable({
  providedIn: 'root'
})
export class FishService {
  private baseUrl = 'http://localhost:3000/api/v1/';

  constructor(private http: HttpClient) { }

  getFish() {
    return this.http.get<Observable<Fish>>(`${this.baseUrl}fish`);
  }

  createFish(payload: Fish) {
    return this.http.post(`${this.baseUrl}fish`, payload);
  }
}
