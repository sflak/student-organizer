import { Component, OnInit } from '@angular/core';
import { Activity } from './todo-item/Activity';
import { Todolist } from './Todolist';
import {EditEventComponent} from './todo-item/edit-event/edit-event.component';
import {TodoItemComponent} from './todo-item/todo-item.component'
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { GlobalDataService } from '../../shared/globaldata.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodolistComponent implements OnInit {
   text;
   items: FirebaseListObservable<any[]>; // listname
   user:  FirebaseObjectObservable<any[]>;
   todoLists: FirebaseListObservable<any[]>;

   userData = JSON.parse(localStorage.getItem('userData')); // used for UID
   key;

   needName = false;
   showDropdown = false;

  // checkedOff should be a property of the item
  // itemsChecked should be a global counter
   checkedOff = false;
   itemsChecked = 0;

   inputField = '';

   // custom color
  color: 'default';



   tex; // holds activity name for user input
   tex2; // holds time name for user input
   tex3; // holds priority name for user input
   tex4; // hold listname

   Activity;

  constructor(af: AngularFireDatabase,gd: GlobalDataService) {
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

    items.forEach(item => {if (item.listname === name) {
      this.deleteTodoItems(item.$key);
      }
    });
    });
    this.showDropdown = false;
  }

  deleteTodoItemsList(key :AngularFireObject){
    console.log(key);

  }


  deleteTodoItems(key) {
    this.items.remove(key);
  }



  onTodoDrop(e: any,nameOfList: any) {


    let LISTNAME = "" + nameOfList;

    this.items.update(e.dragData,{
      listname: nameOfList
    });


  }
  addTodoItems(listName, activityName) {
      console.log('test' + listName + activityName);
      this.tex3 = ''; // placeholder for edit button later
      let temp = new Activity(activityName, listName, this.tex3);

    this.items.push({
        startTime: '',
        finishTime: '',
        listname: listName,
        checkedOff: false,
        Activity: temp
    });
    this.inputField = '';
  }
  // checkedOff should be a property of the item
  // itemsChecked should be a global counter
  // *** the true/false sent to database works but clicking check sometimes doesn't
  // visually show the check and also refresh doesn't save the checked state
  // so there is a small bug.
  itemChecked(key) {
    console.log("before switch: " + this.checkedOff);
    this.checkedOff = !this.checkedOff;
    console.log(this.checkedOff);
    if (this.checkedOff) {
      this.itemsChecked += 1; // not needed since we query from firebase
      this.items.update(key, {
        checkedOff: this.checkedOff
      });
    } else {
      this.itemsChecked -= 1; // not needed since we query from firebase
      this.items.update(key, {
        checkedOff: this.checkedOff
      });
    }
  }
  displayDropdown() {
      this.showDropdown = !this.showDropdown;
  }
  setBackground(className) {
    this.color = className;
    this.showDropdown = !this.showDropdown;
  }

}


export interface AngularFireObject {
  $exists: () => boolean;
  $key: string;
  $value?: any;
}
