import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../users.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private user:UserServices) {}
  list:any;
  ngOnInit(): void {
    this.user.getData()
      .subscribe(response => {
        this.list = response;
      });
  }
}
