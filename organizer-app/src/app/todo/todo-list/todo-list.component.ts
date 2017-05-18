import { Component, OnInit } from '@angular/core';
import { Activity } from './todo-item/Activity';
import { Todolist } from './Todolist';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodolistComponent implements OnInit {
   text;
   items: FirebaseListObservable<any[]>; // listname
   user:  FirebaseObjectObservable<any[]>;
   x: FirebaseObjectObservable<any[]>;
   todoLists: FirebaseListObservable<any[]>;

   userData = JSON.parse(localStorage.getItem('userData')); // used for UID
   search: FirebaseListObservable<any[]>;
   searchItem: string;
   searchText;
   key;

   needName = false;


   tex; // holds activity name for user input
   tex2; // holds time name for user input
   tex3; // holds priority name for user input
   tex4; // hold listname

   Activity;

  constructor(af: AngularFireDatabase) {
    const path = `/users/${this.userData.uid}`; // access user data
    this.items = af.list(path + `/items`);  // all items of every todolist
    this.user = af.object(path);
    this.todoLists = af.list(path + `/todolists` );
  }

  ngOnInit() {
  }


// onTodoDrop(e: any) {
//  this.todos.push(e.dragData);
// }

  showInput() {
    this.needName = !this.needName;
  }


  addTodoList() {
    console.log('clicked');
    this.tex4 = this.toTitleCase(this.tex4);
    const todo = new Todolist(this.tex4);
    this.tex4 = '';
    this.needName = !this.needName;
    this.todoLists.push(todo);
  }
  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  deleteTodoList(key,name) {
    this.todoLists.remove(key);
    this.items.take(1).subscribe(items => { 
  items.forEach(item => {if (item.Activity.listname == name) {
    this.deleteTodoItems(item.Activity.$key)
  } 
  })
})
  }

  deleteTodoItemsList(key :AngularFireObject){
    console.log(key);

  }


  deleteTodoItems(key) {
    this.items.remove(key);
  }



  addTodoItems(listName, activityName) {
      console.log('test' + listName + activityName);
      this.tex3 = ''; // placeholder for edit button later
      let temp = new Activity(activityName, listName, this.tex3);

    this.items.push({
        Activity: temp
    });

  }

}

export interface AngularFireObject {
  $exists: () => boolean;
  $key: string;
  $value?: any;
}