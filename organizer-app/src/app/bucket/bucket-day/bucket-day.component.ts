import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {TodoItem} from '../../shared/TodoItem.module';

@Component({
  selector: 'app-bucket-day',
  templateUrl: './bucket-day.component.html',
  styleUrls: ['./bucket-day.component.css']
})
export class BucketDayComponent implements OnInit {
  @Input() today: Date;
  @Input() todos: TodoItem[];
  constructor() { }

  ngOnInit() {
  }

}
