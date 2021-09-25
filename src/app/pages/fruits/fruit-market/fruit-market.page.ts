import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit-market',
  templateUrl: './fruit-market.page.html',
  styleUrls: ['./fruit-market.page.scss'],
})
export class FruitMarketPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  slideOpts2 = {
    initialSlide: 0,
    speed: 400
  };
  constructor() { }

  ngOnInit() {
  }

}
