import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteListComponent } from './site-list/site-list.component';
import { ListItemComponent } from './site-list/list-item/list-item.component';
import { SiteResolver } from './site-list/site-Resolver.service';

const routes: Routes = [
  {
    path: 'sites',
    component: SiteListComponent,
  },
  {
    path: 'site/:id',
    component: ListItemComponent,
    resolve: { singleSite: SiteResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
