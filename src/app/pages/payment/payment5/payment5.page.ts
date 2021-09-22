import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment5',
  templateUrl: './payment5.page.html',
  styleUrls: ['./payment5.page.scss'],
})
export class Payment5Page implements OnInit {

  id;
  constructor() { }

  ngOnInit() {
  }


  changeMethod(val) {
    this.id = val;
  }

}
