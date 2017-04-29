import { Component, OnInit } from '@angular/core';
import { BucketDay } from '../shared/BucketDay.module';
import { TodoItem } from '../shared/TodoItem.module';
import {ResizeEvent} from 'angular-resizable-element';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  today: Date = new Date();
  d: Date = new Date();
  i: number =0;
  todos: TodoItem [] = [
    new TodoItem('Buy sandwiches', false),
    new TodoItem('Eat stuff', false)
  ];

  // days: BucketDay [] = [
  //   new BucketDay(this.today, null ),
  //   new BucketDay(this.today, null),
  //   new BucketDay(this.today, this.todos),
  //   new BucketDay(this.today, null),
  //   new BucketDay(this.today, null),
  //   new BucketDay(this.today, null),
  //   new BucketDay(this.today, null) ];

  dayslist: Date[] = [
    new Date(this.setDay(this.d,0+this.i)),
    new Date(this.setDay(this.d,1+this.i)),
    new Date(this.setDay(this.d,2+this.i)),
    new Date(this.setDay(this.d,3+this.i)),
    new Date(this.setDay(this.d,4+this.i)),
    new Date(this.setDay(this.d,5+this.i)),
    new Date(this.setDay(this.d,6+this.i)),
  ];

  days: BucketDay [] = [
    new BucketDay(this.dayslist[0], null ),
    new BucketDay(this.dayslist[1], null),
    new BucketDay(this.dayslist[2], this.todos),
    new BucketDay(this.dayslist[3], null),
    new BucketDay(this.dayslist[4], null),
    new BucketDay(this.dayslist[5], null),
    new BucketDay(this.dayslist[6], null) ];

  constructor() { }

  ngOnInit() {
  }

  setDay(d, day):Date {
    var c_day = d.getDay();
    d.setDate(d.getDate() - c_day + day);
    return d;
  }

  prevWeek():void{
      this.refreshDayList(-1);
  }

  nextWeek():void{
      this.refreshDayList(1);
  }

  refreshDayList(offset):void{
    let numbers = [0,1,2,3,4,5,6];
    let nd: Date = new Date();
    for(let x of numbers){
        this.dayslist[x]=new Date(this.setDay(nd,x+offset));
    }
    for(let x of numbers){
        this.days[x]=new BucketDay(this.dayslist[x],null);
    }
  }

}
