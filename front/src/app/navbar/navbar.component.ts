import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private auth: AuthService, private router: Router) {}
  handleLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
