import { Component, OnInit, Output, Input } from '@angular/core';
import { TodoItem } from '../../shared/TodoItem.module';
import { TodoList } from '../../shared/TodoList.module';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() list: TodoList;
  // todoItems: TodoItem[] = [];


  // below is a dummy list for testing purposes, actual declaration below
  todoItems: TodoItem[] = [
    new TodoItem('Take out trash', false),
    new TodoItem('walk the dog', false),
    new TodoItem('Do HW', false)
  ];
  // @Output() label: string;

  // @Output() label = 'Life';
  // @Output() color: string;

  constructor() { }

  ngOnInit() {
    this.list = new TodoList ('life', this.todoItems);
  }

}
