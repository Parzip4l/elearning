import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url="https://cityguard.id/learning_cityguard/api/learning";
    return this.http.get(url);
  }

  ngOnInit(): void {

  }

}
