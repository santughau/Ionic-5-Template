import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Next3Page } from './next3.page';

const routes: Routes = [
  {
    path: '',
    component: Next3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Next3PageRoutingModule {}
