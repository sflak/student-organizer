import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TodoList } from '../shared/TodoList.module';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // numLists: number[] = []; -->  Actual declaration
  // num = 0;
  todoLists: TodoList[];
  needName = false;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  showInput() {
    this.needName = !this.needName;
  }
  onAddList() {

  }

}
