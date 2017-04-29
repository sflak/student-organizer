import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
   todos;
   text;
  constructor() { }

  ngOnInit() {
  	this.todos = [

  	];	
  }
  addTodo(){
  	this.todos.push({
  		text: this.text
  	});
  }

}
