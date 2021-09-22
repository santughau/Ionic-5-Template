import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subject1Page } from './subject1.page';

const routes: Routes = [
  {
    path: '',
    component: Subject1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subject1PageRoutingModule {}
