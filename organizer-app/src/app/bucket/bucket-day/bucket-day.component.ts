import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {TodoItem} from '../../shared/TodoItem.module';

import { Activity } from './../../todo/todo-list/todo-item/Activity';
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
  constructor() { }

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

  let temp3 = e.dragData;

    let temp2 = new Activity(e.dragData, "test_list", "foo");
  this.todoBucket.push({ Activity: temp2})   ;

}


}
