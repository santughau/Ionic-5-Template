import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MHomePage1Page } from './m-home-page1.page';

const routes: Routes = [
  {
    path: '',
    component: MHomePage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MHomePage1PageRoutingModule {}
