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

  // refresh(d){
  //   this.today = d;
  // }

  // ngOnChanges(changes: SimpleChanges){
  //   for(let propName in changes){
  //     let chng = changes[propName];
  //     let newValue = JSON.stringify(chng.currentValue);
  //     console.log("change");
  //   }
  // }

}
