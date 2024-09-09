import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import CryptoJS from 'crypto-js';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private auth: AuthService
  ) {}
  private apiUrl = environment.apiUrl;
  private key = environment.key;
  showError(error?: string) {
    this.toastr.error(error || 'Something Went wrong !', '', {
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
    });
  }
  SuccessToast(str: string) {
    this.toastr.success(str, '', {
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
    });
  }
  decrypt(str: string) {
    return CryptoJS.AES.decrypt(str, this.key).toString(CryptoJS.enc.Utf8);
  }

  onCreateSite(form: NgForm): Observable<any> {
    return this.http.post(`${this.apiUrl}/site/`, form.value);
  }
  getSites(): Observable<any> {
    return this.http.get(`${this.apiUrl}/site/`);
  }
  deleteSite(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/site/${id}`);
  }
  updateSite(form: NgForm, id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/site/${id}`, form.value);
  }
  getSingleSite(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/site/${id}`);
  }

  //************************************Credentials *************************** */
  getCredentials(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/credentials/${id}`);
  }
  updateCredentials(id: string, form: FormGroup): Observable<any> {
    return this.http.put(`${this.apiUrl}/credentials/${id}`, form);
  }
  addCredentials(form: FormGroup): Observable<any> {
    return this.http.post(`${this.apiUrl}/credentials/ `, form);
  }
  deleteCredentials(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/credentials/${id}`);
  }
}
