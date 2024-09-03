import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ManagerService } from '../manager.service';

@Injectable({
  providedIn: 'root',
})
export class SiteResolver implements Resolve<any> {
  constructor(private managerService: ManagerService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.managerService.getSingleSite(route.params['id']);
  }
}
