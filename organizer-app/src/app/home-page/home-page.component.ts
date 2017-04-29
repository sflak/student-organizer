import { Component, OnInit } from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';
import {TodolistComponent}   from '../todolist/todolist.component'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
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

  public styleBottom: Object = {};

  validateBottom(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = window.innerHeight/4.5;
    if (event.rectangle.height < MIN_DIMENSIONS_PX||event.rectangle.height>window.innerHeight-window.innerHeight/4.5) {
      return false;
    }
    return true;
  }

  onResizeEndBottom(event: ResizeEvent): void {
    this.styleBottom = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      bottom: `${event.rectangle.bottom}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

  onResize(event) {
    event.target.innerWidth;
    location.reload();
  }

    public styleTop: Object = {};

  validateTop(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = window.innerHeight/4.5;
    if (event.rectangle.height < MIN_DIMENSIONS_PX||event.rectangle.height>window.innerHeight-window.innerHeight/4.5) {
      return false;
    }
    return true;
  }

  onResizeEndTop(event: ResizeEvent): void {
    this.styleTop = {
      position: 'fixed',
      // left: `${event.rectangle.left}px-100px`,
      top: `${event.rectangle.top}px`,
      bottom: `${event.rectangle.bottom}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

  onResizeStartTop(event: ResizeEvent): void{
    this.styleTop = {
      position: 'fixed',
      left: `${event.rectangle.left}px-100`,
      top: `${event.rectangle.top}px`,
      bottom: `${event.rectangle.bottom}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

  onResizingTop(event: ResizeEvent): void{
      this.styleTop = {
      position: 'fixed',
      // left: `${event.rectangle.left}px-100`,
      top: `${event.rectangle.top}px`,
      bottom: `${event.rectangle.bottom}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

  // onResizeTop(event) {
  //   event.target.innerWidth;
  // }

}
