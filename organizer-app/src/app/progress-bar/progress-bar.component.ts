import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  progressWidth: number;
  totalItems = 50;
  itemsChecked = 25;

  constructor() { }

  ngOnInit() {
    // this.progressWidth = 20;
    this.progressWidth = (this.itemsChecked / this.totalItems) * 100;
  }

  increasePercent() {
    this.itemsChecked += 1;
    Math.floor(this.progressWidth = (this.itemsChecked / this.totalItems) * 100);
  }
}
