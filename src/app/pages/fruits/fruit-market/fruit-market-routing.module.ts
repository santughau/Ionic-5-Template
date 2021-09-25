import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitMarketPage } from './fruit-market.page';

const routes: Routes = [
  {
    path: '',
    component: FruitMarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitMarketPageRoutingModule {}
