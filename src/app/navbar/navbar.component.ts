import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  user: firebase.User;
  subscription: Subscription;
  navbarCollapsed = false;

  constructor(private afAuth: AngularFireAuth) {
    this.subscription = afAuth.authState.subscribe(user => this.user = user);
  }

  toggleCollapse() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
