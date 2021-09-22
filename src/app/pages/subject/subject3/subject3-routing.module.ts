import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subject3Page } from './subject3.page';

const routes: Routes = [
  {
    path: '',
    component: Subject3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subject3PageRoutingModule {}
