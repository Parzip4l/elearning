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
export class NewsService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  API_URL = 'https://esca.co.id/esca_backend/api';
  constructor(private http: HttpClient) { }
  
  getData() {
    return this.http.get(`${this.API_URL}/news`);
  }

  getNewsHome(){
    return this.http.get(`${this.API_URL}/news_home`);
  }

  getNewsDetail(){
    const last_segment = window.location.pathname.split('/').pop();
    return this.http.get(`${this.API_URL}/news_detail/`+last_segment);
  }

 
}
