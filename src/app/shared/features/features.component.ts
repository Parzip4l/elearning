import { Component, OnInit } from '@angular/core';
import { VideoServices } from '../../video.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(private video:VideoServices) {}
  vidapi:any;

  ngOnInit(): void {
    this.video.getData()
      .subscribe(response => {
        this.vidapi = response;
      });
  }

}
