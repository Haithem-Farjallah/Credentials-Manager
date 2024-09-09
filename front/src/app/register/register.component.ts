import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private router: Router, private auth: AuthService) {}
  onSubmit(form: NgForm) {
    this.auth
      .register(form.value.email, form.value.username, form.value.password)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.auth.saveToken(data.token);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.log(error);
          // console.log('Invalid Credentials');
        },
      });
  }
}
