import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteListComponent } from './site-list/site-list.component';
import { ListItemComponent } from './site-list/list-item/list-item.component';
import { SiteResolver } from './site-list/site-Resolver.service';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'sites', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'sites',
    component: SiteListComponent,
    canActivate: [authGuard],
  },

  {
    path: 'site/:id',
    component: ListItemComponent,
    canActivate: [authGuard],
    resolve: { singleSite: SiteResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
