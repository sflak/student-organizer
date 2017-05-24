import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

// as of May 22 not needed for now
// thinking of cleaning the code for global variables

@Injectable()
export class GlobalDataService {
	user:  FirebaseObjectObservable<any[]>;
	userData = JSON.parse(localStorage.getItem('userData')); // used for UID
    itemsChecked: number = 0;

    constructor(){

    }
}