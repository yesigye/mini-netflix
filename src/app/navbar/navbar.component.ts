import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  navbarCollapsed = false;

  constructor(private auth:AuthService) {}

  toggleCollapse() { this.navbarCollapsed = !this.navbarCollapsed }
}
