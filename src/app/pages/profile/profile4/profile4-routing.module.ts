import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile4Page } from './profile4.page';

const routes: Routes = [
  {
    path: '',
    component: Profile4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile4PageRoutingModule {}
