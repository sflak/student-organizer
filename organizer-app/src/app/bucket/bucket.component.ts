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

  dayslist: Date[] = [
    new Date(this.setDay(this.d,0+this.i)),
    new Date(this.setDay(this.d,1)),
    new Date(this.setDay(this.d,2)),
    new Date(this.setDay(this.d,3)),
    new Date(this.setDay(this.d,4)),
    new Date(this.setDay(this.d,5)),
    new Date(this.setDay(this.d,6)),
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
      this.refreshDayList(-7);
  }

  nextWeek():void{
      this.refreshDayList(7);
  }

  refreshDayList(offset):void{
      this.dayslist[0]=new Date(this.setDay(this.d,0+offset));
      this.dayslist[1]=new Date(this.setDay(this.d,1));
      this.dayslist[2]=new Date(this.setDay(this.d,2));
      this.dayslist[3]=new Date(this.setDay(this.d,3));
      this.dayslist[4]=new Date(this.setDay(this.d,4));
      this.dayslist[5]=new Date(this.setDay(this.d,5));
      this.dayslist[6]=new Date(this.setDay(this.d,6));

      this.days[0].changeDate(this.dayslist[0]);
      this.days[1].changeDate(this.dayslist[1]);
      this.days[2].changeDate(this.dayslist[2]);
      this.days[3].changeDate(this.dayslist[3]);
      this.days[4].changeDate(this.dayslist[4]);
      this.days[5].changeDate(this.dayslist[5]);
      this.days[6].changeDate(this.dayslist[6]);
    
  }

}
