import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Next4Page } from './next4.page';

const routes: Routes = [
  {
    path: '',
    component: Next4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Next4PageRoutingModule {}
