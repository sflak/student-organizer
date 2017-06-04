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
   showListEdit = false;
   showEditItem = false;
   strikethrough = false;

  // checkedOff should be a property of the item
  // itemsChecked should be a global counter
   checkedOff:boolean;
   itemsChecked = 0;

   inputField = '';
   tempActivity = '';
   // custom color
  color = 'orchid';
  duplicateName:boolean;


   tex; // holds activity name for user input
   tex2; // holds time name for user input
   tex3; // holds priority name for user input
   tex4; // hold listname

   listNameTemp;
   Activity;
   TextEditorListName = '';
   setTextEditorforListName(name: any){

    this.TextEditorListName = "" + name;
   }

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
    this.todoLists.subscribe(items => {
    items.forEach(item => {if (item.listName === this.listNameTemp) {
      this.duplicateName = true;
      }
    });
    });
    this.listNameTemp = this.toTitleCase(this.listNameTemp);
    if (this.duplicateName){
       console.log('duplicate list name');
       this.todoLists.subscribe(items => {
         items.forEach(item => {if (item.listName != this.listNameTemp) {
           this.duplicateName = false;
           }
        });
        });
    }
    else{
    const todo = new Todolist(this.listNameTemp, this.showDropdown, this.color);
    this.listNameTemp = '';
    this.needName = !this.needName;
    this.todoLists.push(todo);
    this.duplicateName = false; // reset boolean
  }
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



  onTodoDrop(e: any,nameOfList: any,listKey) {

    console.log(listKey);
    let LISTNAME = "" + nameOfList;

    this.items.update(e.dragData, {
      listname: nameOfList,
      prevListKey: listKey
    });

    this.items.update(e.dragData, {
      inList: true
    });

  }
  addTodoItems(listName, activityName, color, listKey) {
      console.log('test' + listName + activityName);


    this.items.push({
        startTime: '-1',
        finishTime: '',
        listname: listName,
        checkedOff: false,
        showEditItem: false,
        prevListKey: listKey,
        itemName: activityName,
        color: color,
        inList: true // true if in one of the todolists. false if in one of buckets
    });
    this.inputField = '';
  }
  // checkedOff should be a property of the item
  // itemsChecked should be a global counter
  // *** the true/false sent to database works but clicking check sometimes doesn't
  // visually show the check and also refresh doesn't save the checked state
  // so there is a small bug.
  itemChecked(key,checkedOff) {
    console.log(checkedOff);
    if(checkedOff){
        this.items.update(key, {
        checkedOff: true
      });
      this.strikethrough = true;
    }
    else{
        this.items.update(key, {
        checkedOff: false
      });
      this.strikethrough = false;
    }

  }
  displayDropdown(key) {
      this.showDropdown = !this.showDropdown;
      this.todoLists.update(key,{
        showDropdown: this.showDropdown
      });
  }
  editItem(key,editedName) {
    let temp = new Activity(editedName, " ", " ");
    this.items.update(key,{
      listName: editedName
    });
    this.showEditItem = false;
  }

  editListName(key,name,newListName) {
    newListName = this.toTitleCase(newListName);
   this.todoLists.subscribe(items => {
    items.forEach(item => {if (item.listName === newListName) {
      this.duplicateName = true;
      }
    });
    });
    if (this.duplicateName){
       console.log('duplicate list name');
       this.todoLists.subscribe(items => {
         items.forEach(item => {if (item.listName != newListName) {
           this.duplicateName = false;
           }
        });
        });
    }

    else{
    this.items.take(1).subscribe(items => {

    items.forEach(item => {if (item.listname === name) {

      this.items.update(item.$key,{
        listname: newListName
      });
      }
    });
   this.todoLists.update(key,{
      listName: newListName // ???????????????? not really sure want to do lol
    });


    });

  }
    this.toggleShowListEdit();
  }
  toggleShowListEdit() {
     this.showListEdit = !this.showListEdit;
  }
  setBackground(className, key) {
    this.color = className;
    this.todoLists.update(key, {
        color: this.color
      });

    this.todoLists.update(key, {
      showDropdown: false
    });


   this.items.take(1).subscribe(items => {

    items.forEach(item => {if (item.prevListKey === key) {
      this.items.update(item.$key,{
        color: className
      });
      }
    });
    });
   this.showDropdown = false;

  }


}


export interface AngularFireObject {
  $exists: () => boolean;
  $key: string;
  $value?: any;
}
// TODO
// Double check bug (need to check the box twice for it to work)
// Todo items in calendar should change color when the list its assigned to changes color
// Add more list color options
// Style time edit component
// Should window reload on resize?
// strike through todo when checked
