import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Next6Page } from './next6.page';

const routes: Routes = [
  {
    path: '',
    component: Next6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Next6PageRoutingModule {}
