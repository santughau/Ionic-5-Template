import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subject5Page } from './subject5.page';

const routes: Routes = [
  {
    path: '',
    component: Subject5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subject5PageRoutingModule {}
