import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Payment6Page } from './payment6.page';

const routes: Routes = [
  {
    path: '',
    component: Payment6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Payment6PageRoutingModule {}
