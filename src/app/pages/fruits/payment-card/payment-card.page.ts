import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.page.html',
  styleUrls: ['./payment-card.page.scss'],
})
export class PaymentCardPage implements OnInit {
  month = ['January', 'February', 'March', 'April', 'May',
    'June', 'Jully', 'August', 'September', 'October', 'November', 'December'];
  
  year = [];
  constructor() { }

  ngOnInit() {
    for (let i = 2021; i < 2032; i++){
      this.year.push(i);
    }
  }

}
