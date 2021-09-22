import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment6',
  templateUrl: './payment6.page.html',
  styleUrls: ['./payment6.page.scss'],
})
export class Payment6Page implements OnInit {
  id;
  constructor() { }

  ngOnInit() {
  }


  changeMethod(val) {
    this.id = val;
  }

}
