import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class AF {
  constructor(public af: AngularFireAuth) { }
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */

  socialLogin(loginProvider) {
    var provider;
    if (loginProvider === 'google') {
      return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    else if (loginProvider === 'facebook') {
      return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

  }

  
  /**
   * Logs out the current user
   */
  logout() {

   return this.af.auth.signOut();
  }
}