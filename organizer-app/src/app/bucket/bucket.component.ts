import { Component, OnInit } from '@angular/core';
import { BucketDay } from '../shared/BucketDay.module';
import { TodoItem } from '../shared/TodoItem.module';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  today: Date = new Date();
  todos: TodoItem [] = [
    new TodoItem('Buy sandwiches', false),
    new TodoItem('Eat stuff', false)
  ];

  days: BucketDay [] = [
    new BucketDay(this.today, null ),
    new BucketDay(this.today, null),
    new BucketDay(this.today, this.todos),
    new BucketDay(this.today, null),
    new BucketDay(this.today, null),
    new BucketDay(this.today, null),
    new BucketDay(this.today, null) ];

  constructor() { }

  ngOnInit() {
  }


}
