import { Component } from '@angular/core';
import { AF } from "./providers/af";
import { Router } from "@angular/router";
import { AngularFire,FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isLoggedIn: boolean;
  user:  FirebaseObjectObservable<any[]>; 
  // storage
  userData: any;

  constructor(public afService: AF, private router: Router,userObject: AngularFire) {
    // This asynchronously checks if our user is logged it and will automatically
    // redirect them to the Login page when the status changes.
    // This is just a small thing that Firebase does that makes it easy to use.
    this.afService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          console.log("Not Logged in.");
          this.router.navigate(['']);
          this.isLoggedIn = false;

        }
        else {
          console.log("Successfully Logged in.");
          this.isLoggedIn = true;
          localStorage.setItem('userData', JSON.stringify(auth.auth));
          this.router.navigate(['home']);

          this.userData = JSON.parse(localStorage.getItem('userData'));
          // create in firebase node with uid for unique identifer
          this.user = userObject.database.object(`/users/${this.userData.uid}`)
          this.user.update({ name: this.userData.displayName
          });
          console.log(this.userData.uid);

        }
      }
    );
  }
  logout() {
    localStorage.setItem('userData', '');
    this.afService.logout();
  }
}


