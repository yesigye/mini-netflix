import { Injectable, OnDestroy } from "@angular/core";
import * as firebase from "firebase";
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs';

@Injectable()
export class AuthService {
  subscription:Subscription;

  constructor(private afAuth: AngularFireAuth) {
  }

  loginUser(email:string, password:string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logoutUser() {
    this.afAuth.auth.signOut();
  }

  updateCurrentUser(userObject) {
    // console.log(userObject)
    // this.currentUser.firstName = userObject.firstName;
    // this.currentUser.lastName = userObject.lastName;
    // console.log(this.currentUser.firstName)
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
