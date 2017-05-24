import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { GlobalDataService } from '../shared/globaldata.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  progressWidth: number;
  totalItems = 0;
  itemsChecked = 0;
  items: FirebaseListObservable<any[]>; // listname
  userData = JSON.parse(localStorage.getItem('userData')); // used for UID
  numChecked: FirebaseListObservable<any[]>;

  constructor(af: AngularFireDatabase, gd: GlobalDataService) {
    const path = `/users/${this.userData.uid}`; // access user data
    this.items = af.list(path + `/items`);  // all items of every todolist
        this.numChecked = af.list(path + `/items`, {
      query: {
        orderByChild: 'checkedOff',
        equalTo: true
      }
    });


    this.getItemLength();
    this.getCheckedLength();
   }

  ngOnInit() {
    // this.progressWidth = 20;
    if (this.totalItems === 0) {
      this.progressWidth = 0;
    } else {
      this.progressWidth = (this.itemsChecked / this.totalItems) * 100;
    }

  }

    // get number of items from database then assigned to variable totalItems
  getItemLength() {
    this.items.subscribe(items => this.setTotalItems(items.length));
  }

  setTotalItems(length) {
    this.totalItems = length;
    console.log('Total Items = ' + this.totalItems);
  }

  // get number of checked items from database then assigned to variable itemChecked
  getCheckedLength() {
    this.numChecked.subscribe(queriedItems =>
      this.setCheckedItems(queriedItems.length));
  }

  setCheckedItems(length) {
    this.itemsChecked = length;
    console.log('number of checked items = ' + this.itemsChecked);
  }



  increasePercent() {
    this.itemsChecked += 1;
    this.progressWidth = (this.itemsChecked / this.totalItems) * 100;
    this.progressWidth = Math.floor(this.progressWidth);
  }
}
