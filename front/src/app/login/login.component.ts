import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private manager: ManagerService
  ) {}
  onSubmit(form: NgForm) {
    this.auth.login(form.value.email, form.value.password).subscribe({
      next: (data) => {
        console.log(data);
        this.auth.saveToken(data.token);
        this.manager.SuccessToast('Login Successful');
        this.router.navigate(['/sites']);
      },
      error: () => {
        this.manager.showError('Invalid Credentials');
      },
    });
  }
}
