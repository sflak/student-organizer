import { Component, OnInit, Input, Output } from '@angular/core';
import { TodoItem} from '../../../shared/TodoItem.module';
import { AfterViewInit, ViewChild } from '@angular/core';

import {EditEventComponent} from './edit-event/edit-event.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() timeStart: number;
  @Output() timeEnd: number;
  @ViewChild(EditEventComponent) editComponent: EditEventComponent;

  showEditor:boolean;

  constructor() { }

  ngOnInit() {
    this.showEditor = false;
  }

  // ngAfterViewInit(){
  //   this.editComponent.showEdit = false;
  // }

  show(){
    console.log("showEditor value"+this.showEditor);
    this.showEditor = true; 
     
    this.editComponent.showEditBox();
    // console.log("here");
    // this.editComponent.showEdit = true;
  }

  hide(){
    // this.editComponent.hide();
    this.showEditor = false;
  }

  returnStatus():boolean{
    return this.showEditor;
  }
}
