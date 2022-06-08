import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserServices {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  API_URL = 'https://cityguard.id/learning_cityguard/api';
  constructor(private http: HttpClient) { }
  
  getData() {
    return this.http.get(`${this.API_URL}/learning`);
  }
}
