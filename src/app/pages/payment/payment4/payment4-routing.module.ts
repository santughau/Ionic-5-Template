import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Payment4Page } from './payment4.page';

const routes: Routes = [
  {
    path: '',
    component: Payment4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Payment4PageRoutingModule {}
