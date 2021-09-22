import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subject6Page } from './subject6.page';

const routes: Routes = [
  {
    path: '',
    component: Subject6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subject6PageRoutingModule {}
