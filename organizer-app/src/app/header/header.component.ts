import { Component, OnInit } from '@angular/core';
import { AF } from "../providers/af";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  public isLoggedIn: boolean;

  showDropdown = false;


  userData = JSON.parse(localStorage.getItem('userData'));
  photoURL = this.userData.photoURL;
  constructor(public afService: AF, private router: Router) {
  }
  logout() {
    localStorage.setItem('userData', '');
    this.afService.logout();
  }
  showDropdownMenu(){
     this.showDropdown = !this.showDropdown; 
     console.log(this.showDropdown);
  }

}
