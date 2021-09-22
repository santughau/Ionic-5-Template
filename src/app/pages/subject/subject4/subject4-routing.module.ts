import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subject4Page } from './subject4.page';

const routes: Routes = [
  {
    path: '',
    component: Subject4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subject4PageRoutingModule {}
