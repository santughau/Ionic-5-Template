import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Next5Page } from './next5.page';

const routes: Routes = [
  {
    path: '',
    component: Next5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Next5PageRoutingModule {}
