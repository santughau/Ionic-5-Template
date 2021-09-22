import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { List1Page } from './list1.page';

const routes: Routes = [
  {
    path: '',
    component: List1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class List1PageRoutingModule {}
