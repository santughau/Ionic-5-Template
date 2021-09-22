import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment4',
  templateUrl: './payment4.page.html',
  styleUrls: ['./payment4.page.scss'],
})
export class Payment4Page implements OnInit {
  id;
  constructor() { }

  ngOnInit() {
  }


  changeMethod(val) {
    this.id = val;
  }

}
