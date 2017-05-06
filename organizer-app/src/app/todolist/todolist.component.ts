import { Component, OnInit } from '@angular/core';
import { Activity } from '../Activity';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
   todos;
   text;
   Activity;
  constructor() { }

  ngOnInit() {
    this.todos = [

    ];
  }


//onTodoDrop(e: any) {
//  this.todos.push(e.dragData);
//}



  //theres a bug in the delete function. It will delete multiples of the same item with one delete click*******************8
  deleteTodo(todoText){
      for(var i  =0 ; i < this.todos.length; i++){
          if(this.todos[i].Activity.name == todoText){
              this.todos.splice(i,1);
          }
      }
      this.bubblesort();

  }
  bubblesort(){
        // crappy bubble sort for now
        for( var i = 0 ; i < this.todos.length; i++){
            for(var j = 1; j < this.todos.length ; j++){
                if(this.todos[j-1].Activity.name > this.todos[j].Activity.name)
                {
                  /*
                  let temp : string = this.todos[j-1].Activity.name;
                  this.todos[j-1].Activity.name = this.todos[j].Activity.name ;
                  this.todos[j].Activity.name = temp;
                  */
                  let temp : Activity = this.todos[j-1].Activity;
                  this.todos[j-1].Activity = this.todos[j].Activity ;
                  this.todos[j].Activity = temp;
                  }
              }
            }
  }
  addTodo(){
    let temp = new Activity(this.text);
    //this.text = " Tiger "
    this.todos.push({ text: this.text, Activity: temp})   ;

    this.bubblesort();
  }

}

/*******************
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

*******************/