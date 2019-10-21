import { Injectable } from "@angular/core";
import { userInterface } from "../interfaces/user.interface";

@Injectable()
export class AuthService {
  currentUser:userInterface;

  loginUser(userName:string, password:string) {
    this.currentUser = {
      id: 1,
      username: userName,
      firstName: 'John',
      lastName: 'Papa'
    }
  }

  updateCurrentUser(userObject) {
    console.log(userObject)
    this.currentUser.firstName = userObject.firstName;
    this.currentUser.lastName = userObject.lastName;
    console.log(this.currentUser.firstName)
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
