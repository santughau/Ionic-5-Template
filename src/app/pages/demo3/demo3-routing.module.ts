import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo3Page } from './demo3.page';

const routes: Routes = [
  {
    path: '',
    component: Demo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo3PageRoutingModule {}
