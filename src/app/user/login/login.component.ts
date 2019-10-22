import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mouseoverLogin = false;

  constructor (private authService:AuthService, private router:Router) {}

  login(formValues) {
    this.authService.loginUser(formValues.username, formValues.password);
    this.router.navigate(['movies']);
  }
}
