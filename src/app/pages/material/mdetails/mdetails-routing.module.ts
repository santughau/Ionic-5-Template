import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdetailsPage } from './mdetails.page';

const routes: Routes = [
  {
    path: '',
    component: MdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdetailsPageRoutingModule {}
