import { Component, OnInit, Input, Output } from '@angular/core';
import { TodoItem} from '../../../shared/TodoItem.module';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() timeStart: number;
  @Output() timeEnd: number;
  constructor() { }

  ngOnInit() {
  }

}
