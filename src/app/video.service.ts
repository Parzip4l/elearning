import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VideoServices {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  API = 'https://cityguard.id/learning_cityguard/api/video';
  constructor(private http: HttpClient) { }
  
  getData() {
    return this.http.get(`${this.API}`);
  }
}
