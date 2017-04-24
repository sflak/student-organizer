import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucket-day',
  templateUrl: './bucket-day.component.html',
  styleUrls: ['./bucket-day.component.css']
})
export class BucketDayComponent implements OnInit {
  today: number = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
