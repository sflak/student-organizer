import { Component, OnInit, EventEmitter, Input, Output, ElementRef } from '@angular/core';
import { EditEvent} from '../../../../shared/EditEvent.module';

import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  @Input() key: any;
  // @Output() onSaved = new EventEmitter<boolean>();
  // saved = false;

  showEdit:boolean = false;
  saved:boolean = false;
  eventTitle:string = null;
  validSave:boolean = true;

  startHour:string = null;
  startMin:string = null;
  startAmPm:string = null;
  finishHour: string = null;
  finishMin: string = null;
  finishAmPm:string = null;

  temp1:string = null;
  temp2:string = null;
  temp3:string = null;
  temp4:string = null;
  temp5:string = null;
  temp6:string = null;

  public hoursArray=["1","2","3","4","5","6","7","8","9","10","11","12"];
  public minutesArray=["00","05","10","15","20","25","30","35","40","45","50","55"];

  userData = JSON.parse(localStorage.getItem('userData')); // used for UID
  items: FirebaseListObservable<any[]>; // listname

  startTime:string;
  finishTime:string;

  constructor(public el:ElementRef,af: AngularFireDatabase) {
    const path = `/users/${this.userData.uid}`; // access user data
    this.items = af.list(path + `/items`);  // all items of every todolist

  }

  ngOnInit() {

  }

  showEditBox(){
    this.validSave = true;
    this.showEdit = true;

  }

  saveChanges(){
    if(this.validateSubmit()){
      this.startHour = this.temp1;
      this.startMin = this.temp2;
      this.startAmPm = this.temp3;
      this.finishHour = this.temp4;
      this.finishMin = this.temp5;
      this.finishAmPm = this.temp6;
      this.showEdit = false;
      this.validSave = true;
      this.startTime = this.startHour + ":" + this.startMin + this.startAmPm;
      this.finishTime =  this.finishHour + ":" + this.finishMin + this.finishAmPm;
      if(this.startHour == null){
        this.startTime = "-1";
      }
      if(this.finishHour==null){
        this.finishTime = "-1";
      }
      console.log(this.startTime);
      this.updateTime();
      // uncomment for testing time and key is correct
      //console.log(this.startHour + ":" + this.startMin + this.startAmPm); 
      //console.log(this.finishHour + ":" + this.finishMin + this.finishAmPm);
      //console.log(this.key);
    }else{
      this.validSave = false;
    }
    // this.el.nativeElement.style.display = "none";
  }

  updateTime(){
      this.items.update(this.key,{
    startTime: this.startTime,
    finishTime: this.finishTime
  });

  }

  clearChanges(){
    this.temp1 = null;
    this.temp2 = null;
    this.temp3 = null;
    this.temp4 = null;
    this.temp5 = null;
    this.temp6 = null;
  }

  cancel(){
    this.temp1 = this.startHour;
    this.temp2 = this.startMin;
    this.temp3 = this.startAmPm;
    this.temp4 = this.finishHour;
    this.temp5 = this.finishMin;
    this.temp6 = this.finishAmPm;
    this.showEdit = false;
    // this.el.nativeElement.style.display = "none";
  }

  validateSubmit(){
    if(this.temp1 == "Hour" || this.temp2 =="Min" || this.temp4=="Hour" || this.temp5 == "Min"){
        return false;
    }
    if(this.temp1!= null || this.temp2!= null || this.temp3!=null){
        if(this.temp1== null || this.temp2== null || this.temp3==null){
            return false;
        }
    } 
    if(this.temp4!=null || this.temp5!=null || this.temp6!=null){
        if(this.temp4==null || this.temp5==null || this.temp6==null){
            return false;
        } 
    }  

    if(this.temp3!=null && this.temp6!= null){
        if(this.temp3 == "PM" && this.temp6 =="AM"){
            return false;
        }else if(this.temp3 == this.temp6){
            if(Number(this.temp1)>Number(this.temp4)){
                return false;
            }else if(Number(this.temp1) == Number(this.temp4)){
                if(Number(this.temp2)>Number(this.temp5)){
                  return false;
                }
            }
        }
    }
    return true; 
  }

}
