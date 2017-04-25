import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userData: any;
  constructor() {

    this.user();

  }

  ngOnInit() {
  }

  user() {

    if (localStorage.getItem('userData')) {

      this.userData = JSON.parse(localStorage.getItem('userData'));
    
      console.log(this.userData);
    }
    else {
      console.log("No Data");
    }

  }

}
