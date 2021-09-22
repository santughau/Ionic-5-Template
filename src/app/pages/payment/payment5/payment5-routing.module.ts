import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Payment5Page } from './payment5.page';

const routes: Routes = [
  {
    path: '',
    component: Payment5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Payment5PageRoutingModule {}
