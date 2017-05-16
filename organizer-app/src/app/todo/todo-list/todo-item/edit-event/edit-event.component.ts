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

  startHour:number = null;
  startMin:number = null;
  startAmPm:string = null;
  finishHour: number = null;
  finishMin:number = null;
  finishAmPm:string = null;


  private hoursArray=[1,2,3,4,5,6,7,8,9,10,11,12];
  private minutesArray=[0,5,10,15,20,25,30,35,40,45,50,55];

  constructor() { }

  ngOnInit() {
  }

  showEditBox(){
    this.showEdit = true;
  }

  hideEditBox(){
    this.showEdit = false;
  }

  clearChanges(){
    this.saved = false;
    this.startHour = null;
    this.startMin = null;
    this.startAmPm = null;
    this.finishHour =null;
    this.finishMin = null;
    this.finishAmPm = null;
  }

  showSelectValue(mySelect){
    console.log("mySelect: "+mySelect);
  }

}
