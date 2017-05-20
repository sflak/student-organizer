import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {TodoItem} from '../../shared/TodoItem.module';

import { Activity } from './../../todo/todo-list/todo-item/Activity';

import {BucketComponent} from '../bucket.component';

import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-bucket-day',
  templateUrl: './bucket-day.component.html',
  styleUrls: ['./bucket-day.component.css']
})
export class BucketDayComponent implements OnInit {

  @Input() today: Date;
  @Input() todos: TodoItem[];

  text;
  Activity;

  userData = JSON.parse(localStorage.getItem('userData')); // used for UID
  items: FirebaseListObservable<any[]>; 
  temp5: string;

  constructor(af: AngularFireDatabase) {
    const path = `/users/${this.userData.uid}`; // access user data
    this.items = af.list(path + `/items`);  // all items of every todolist
   }

  ngOnInit() {
  }

todoBucket = [
];


onTodoDrop(e: any) {
//console.log(e.dragData);
//console.log("apple");
//  this.todoBucket.push(e.dragData);
//console.log(e.dragData);
//let temp = new Activity("recycle", "test_list", "foo");
  //  this.todolist3.push({ Activity: temp})   ;
  //this.todoBucket.push({ Activity: temp})   ;

  this.temp5 = "" + this.today.getFullYear() + this.today.getMonth() +this.today.getDate()

  let temp3 = e.dragData;
  //var my =  this.today.charAt(2);
    //let temp2 = new Activity(e.dragData, "test_list", "foo");
   console.log(this.temp5);
   console.log(e.dragData);
  //  today
  this.items.push({ Activity:{
    listName: this.temp5
  }})   ;

}


}
