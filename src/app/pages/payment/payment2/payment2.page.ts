import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment2',
  templateUrl: './payment2.page.html',
  styleUrls: ['./payment2.page.scss'],
})
export class Payment2Page implements OnInit {
  id;
  constructor() { }

  ngOnInit() {
  }


  changeMethod(val) {
    this.id = val;
  }

}
