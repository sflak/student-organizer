import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { TodoList } from '../shared/TodoList.module';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   todos;
   text;
   items: FirebaseListObservable<string[]>; // listname
   user:  FirebaseObjectObservable<any[]>;
   userData = JSON.parse(localStorage.getItem('userData')); // used for UID
   search: FirebaseListObservable<any[]>;
   searchItem: string;  
   searchText;



  // numLists: number[] = []; -->  Actual declaration
  // num = 0;
  todoLists: TodoList[];
  needName = false;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  constructor(af: AngularFireDatabase) {
    const path = `/users/${this.userData.uid}`; // access user data
    this.items = af.list(path + `/items`); // should be replaced by listname
    this.user = af.object(path);
  }

  ngOnInit() {
  }

  showInput() {
    this.needName = !this.needName;
  }
  onAddList() {

  }

}
