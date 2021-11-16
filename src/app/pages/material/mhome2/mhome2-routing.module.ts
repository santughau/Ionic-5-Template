import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mhome2Page } from './mhome2.page';

const routes: Routes = [
  {
    path: '',
    component: Mhome2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mhome2PageRoutingModule {}
