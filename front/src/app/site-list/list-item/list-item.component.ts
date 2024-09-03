import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent implements OnInit {
  singleSite: any;
  credentials = null;
  signupForm: FormGroup;
  formType: string = 'Add';
  Value = {
    email: '',
    username: '',
    password: '',
    id: '',
  };
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private managerService: ManagerService
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      siteId: [this.route.snapshot.params['id']],
    });
    this.getCredentials();
  }
  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => (this.singleSite = data['singleSite'])
    );
  }

  loadData(credential: any) {
    this.formType = 'Update';
    this.Value = {
      email: credential.email,
      username: credential.username,
      password: this.managerService.decrypt(credential.password),
      id: credential._id,
    };
    this.scrollTo(0);
  }
  cancelSubmit() {
    this.signupForm.reset();
    this.formType = 'Add';
    this.Value = {
      email: '',
      username: '',
      password: '',
      id: '',
    };
  }
  scrollTo(position: number): void {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  }
  //Add new Credentials :
  onSubmit() {
    if (this.signupForm.valid) {
      if (this.formType === 'Add') {
        this.managerService.addCredentials(this.signupForm.value).subscribe({
          next: () => {
            this.getCredentials();
            this.signupForm.reset();
            this.managerService.SuccessToast('Credentials Added Successfully');
          },
          error: () => {
            this.managerService.showError();
          },
        });
      } else {
        this.updateCredentials();
      }
      this.scrollTo(document.body.scrollHeight);
    } else {
      console.log('Form is invalid');
    }
  }

  getCredentials() {
    this.managerService
      .getCredentials(this.route.snapshot.params['id'])
      .subscribe({
        next: (data) => {
          this.credentials = data;
          console.log(data);
        },
        error: () => {
          this.managerService.showError();
        },
      });
  }
  updateCredentials() {
    this.managerService
      .updateCredentials(this.Value.id, this.signupForm.value)
      .subscribe({
        next: () => {
          this.getCredentials();
          this.signupForm.reset();
          this.formType = 'Add';
          this.managerService.SuccessToast('Credentials Updated Successfully');
        },
        error: () => {
          this.managerService.showError;
        },
      });
  }
  deleteCredentials(id: string) {
    this.managerService.deleteCredentials(id).subscribe({
      next: () => {
        this.getCredentials();
        this.managerService.SuccessToast('Credentials Deleted Successfully');
      },
      error: () => {
        this.managerService.showError();
      },
    });
  }
}
