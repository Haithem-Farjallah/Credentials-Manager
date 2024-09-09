import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManagerService } from '../manager.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrl: './site-list.component.css',
})
export class SiteListComponent implements OnInit {
  showForm: boolean = false;
  Sites = null;
  formTitle = 'Add ';
  value = {
    siteImgUrl: '',
    siteName: '',
    siteUrl: '',
    id: null,
  };
  constructor(
    private managerService: ManagerService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getSites();
  }

  getSites() {
    this.managerService.getSites().subscribe({
      next: (data) => {
        this.Sites = data;
      },
      error: () => {
        this.toastr.error('Something Went wrong !', '', {
          closeButton: true,
          timeOut: 3000,
          progressBar: true,
        });
      },
    });
  }
  addSite() {
    this.showForm = true;
  }
  cancelForm() {
    this.showForm = false;
    this.formTitle = 'Add';
    this.value = {
      siteImgUrl: '',
      siteName: '',
      siteUrl: '',
      id: null,
    };
  }
  SuccessToast(str: string) {
    this.toastr.success(str, '', {
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
    });
  }

  onSubmit(form: NgForm) {
    if (this.formTitle === 'Add') {
      this.managerService.onCreateSite(form).subscribe({
        next: () => {
          this.getSites();
          this.SuccessToast('Site Added Successfully');
          form.reset();
          this.cancelForm();
        },
        error: (e) => {
          this.toastr.error('Something Went wrong !', '', {
            closeButton: true,
            timeOut: 3000,
            progressBar: true,
          });
        },
      });
    } else if (this.formTitle === 'Update ') {
      if (this.value.id !== null) {
        this.managerService.updateSite(form, this.value.id).subscribe({
          next: () => {
            this.getSites();
            this.SuccessToast('Site Updated Successfully');
            form.reset();
            this.cancelForm();
          },
          error: () => {
            this.toastr.error('Something Went wrong !', '', {
              closeButton: true,
              timeOut: 3000,
              progressBar: true,
            });
          },
        });
      }
    }
  }
  loadData(site: any) {
    this.formTitle = 'Update ';
    this.addSite();
    this.value = {
      siteImgUrl: site.siteImgUrl,
      siteName: site.siteName,
      siteUrl: site.siteUrl,
      id: site._id,
    };
  }
  handleDelete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this site!',
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: false,
      showDenyButton: true,
      denyButtonText: 'Yes, delete it!',
      cancelButtonText: 'cancel',
    }).then((result) => {
      if (result.isDenied) {
        this.managerService.deleteSite(id).subscribe({
          next: () => {
            this.getSites();
            this.SuccessToast('Site Deleted Successfully');
          },
          error: (e) => {
            this.toastr.error('Something Went wrong !', '', {
              closeButton: true,
              timeOut: 3000,
              progressBar: true,
            });
          },
        });
      }
    });
  }
}
