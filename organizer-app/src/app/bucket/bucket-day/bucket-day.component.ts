import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import {TodoItem} from '../../shared/TodoItem.module';

import { Activity } from './../../todo/todo-list/todo-item/Activity';

import {TodolistComponent} from './../../todo/todo-list/todo-list.component';
import {EditEventComponent} from './../../todo/todo-list/todo-item/edit-event/edit-event.component';

import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-bucket-day',
  templateUrl: './bucket-day.component.html',
  styleUrls: ['./bucket-day.component.css']
})
export class BucketDayComponent implements OnInit {

  @Input() today: Date;
  @Input() todos: TodoItem[];
  @ViewChild(EditEventComponent) editComponent: EditEventComponent;
  text;
  Activity;

  userData = JSON.parse(localStorage.getItem('userData')); // used for UID
  items: FirebaseListObservable<any[]>;
  temp5: string;

  showEditor = false;
  showDropdown = false;

  constructor(af: AngularFireDatabase) {
    const path = `/users/${this.userData.uid}`; // access user data
    this.items = af.list(path + `/items`);  // all items of every todolist
   }

  ngOnInit() {
  }


  deleteTodoItems(key) {
    this.items.remove(key);
  }
  editItem(key,editedName) {
  let temp = new Activity(editedName, " ", " ");
  this.items.update(key,{
    Activity: temp
  });
  }


onTodoDrop(e: any) {
// console.log(e.dragData);
// console.log("apple");
//  this.todoBucket.push(e.dragData);
// console.log(e.dragData);
// let temp = new Activity("recycle", "test_list", "foo");
  //  this.todolist3.push({ Activity: temp})   ;
  // this.todoBucket.push({ Activity: temp})   ;

//  this.temp5 = "" + this.today.getFullYear() + this.today.getMonth() +this.today.getDate()
this.temp5 = "" + this.today.getFullYear() + ' '  + this.today.getMonth() + ' ' +this.today.getDate();
  // var my =  this.today.charAt(2);
    // let temp2 = new Activity(e.dragData, "test_list", "foo");
   console.log(this.temp5);
   console.log(e.dragData);
  // today
  this.items.update(e.dragData,{
    listname: this.temp5
  });

  this.items.update(e.dragData, {
    inList: false
  });


}

  itemChecked(key,checkedOff) {
    console.log(checkedOff);
    if(checkedOff){
        this.items.update(key, {
        checkedOff: true
      });
    }
    else{
        this.items.update(key, {
        checkedOff: false
      });

    }

  }
  showOptions() {
    this.showDropdown = !this.showDropdown;
    console.log("showDropdown= ", this.showDropdown);
  }


}
