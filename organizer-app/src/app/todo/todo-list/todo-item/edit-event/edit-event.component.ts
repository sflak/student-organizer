import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { EditEvent} from '../../../../shared/EditEvent.module';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  // @Input() showEdit: boolean;
  // @Output() onSaved = new EventEmitter<boolean>();
  // saved = false;

  showEdit:boolean = false;
  saved:boolean = false;
  eventTitle:string = null;

  startHour:string = null;
  startMin:string = null;
  startAmPm:string = "AM";
  finishHour: string =null;
  finishMin: string = null;
  finishAmPm:string = "AM";

  temp1:string = null;
  temp2:string = null;
  temp3:string = "AM";
  temp4:string = null;
  temp5:string = null;
  temp6:string = "AM";

  private hoursArray=["1","2","3","4","5","6","7","8","9","10","11","12"];
  private minutesArray=["00","05","10","15","20","25","30","35","40","45","50","55"];

  constructor() { }

  ngOnInit() {
  }

  showEditBox(){
    this.showEdit = true;
  }

  saveChanges(){
    this.startHour = this.temp1;
    this.startMin = this.temp2;
    this.startAmPm = this.temp3;
    this.finishHour = this.temp4;
    this.finishMin = this.temp5;
    this.finishAmPm = this.temp6;
    // this.saved = true;
    this.showEdit = false;
  }

  clearChanges(){
    // this.saved = false;
    this.temp1 = null;
    this.temp2 = null;
    this.temp3 = "AM";
    this.temp4 = null;
    this.temp5 = null;
    this.temp6 = "AM";
  }

  cancel(){
    this.temp1 = this.startHour;
    this.temp2 = this.startMin;
    this.temp3 = this.startAmPm;
    this.temp4 = this.finishHour;
    this.temp5 = this.finishMin;
    this.temp6 = this.finishAmPm;
    this.showEdit = false;
  }

}
