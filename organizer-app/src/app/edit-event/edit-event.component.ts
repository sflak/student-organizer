import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  private hoursArray=[1,2,3,4,5,6,7,8,9,10,11,12];
  private minutesArray=[0,5,10,15,20,25,30,35,40,45,50,55];

  constructor() { }

  ngOnInit() {
  }

  close = new EventEmitter();

  onClickedExit() {
       this.close.emit('event');
  }

}
