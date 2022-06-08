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

      constructor(private http:HttpClient) {}

      getData() 
      {
        let url="https://cityguard.id/learning_cityguard/api/learning";
        return this.http.get(url);
      }
}
