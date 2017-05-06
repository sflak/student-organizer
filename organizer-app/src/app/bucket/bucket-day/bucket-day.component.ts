import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {TodoItem} from '../../shared/TodoItem.module';
import { Activity } from '../../Activity';
import { TodolistComponent } from '../../todolist/todolist.component';

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
  this.todoBucket.push(e.dragData);
}



}
