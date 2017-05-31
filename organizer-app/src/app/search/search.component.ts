import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { GlobalDataService } from '../shared/globaldata.service';
import { Activity } from './../todo/todo-list/todo-item/Activity';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items: FirebaseListObservable<any[]>; // listname
    userData = JSON.parse(localStorage.getItem('userData')); // used for UID


      constructor(af: AngularFireDatabase, gd: GlobalDataService) {
        const path = `/users/${this.userData.uid}`; // access user data
        this.items = af.list(path + `/items`);  // all items of every todolist




       }

       searchItem; // text editor for search item in form
       searchItem2;
  ngOnInit() {
  }

  searchMethod(e:any){



  this.searchItem2= "" + e;

  }


   List_Name:string;

   parseListName(e:string, listChecker:boolean){

  if( listChecker == false){
  var str = "" + e;
  var splitted = str.split(" ", 3);

  var month = "";
  if(splitted[1] == "0")
    month = "January";
    if(splitted[1] == "1")
      month = "February";
    if(splitted[1] == "2")
        month = "March";
    if(splitted[1] == "3")
        month = "April";
    if(splitted[1] == "4")
        month = "May";
    if(splitted[1] == "5")
        month = "June";
    if(splitted[1] == "6")
        month = "July";
    if(splitted[1] == "7")
        month = "August";
    if(splitted[1] == "8")
        month = "September";
    if(splitted[1] == "9")
        month = "October";
    if(splitted[1] == "10")
        month = "Novemember";
    if(splitted[1] == "11")
        month = "December";


 this.List_Name = "" + month + " " + splitted[2] +" " +  splitted[0];
  }
  else{
      this.List_Name = e + "";
      return;
   }
   }

   clearSearch(){

   this.searchItem = "";
   this.searchItem2 = "";

   }
}
