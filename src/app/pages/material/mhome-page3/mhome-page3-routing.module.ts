import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MhomePage3Page } from './mhome-page3.page';

const routes: Routes = [
  {
    path: '',
    component: MhomePage3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MhomePage3PageRoutingModule {}
