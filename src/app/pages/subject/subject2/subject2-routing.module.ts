import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subject2Page } from './subject2.page';

const routes: Routes = [
  {
    path: '',
    component: Subject2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subject2PageRoutingModule {}
