import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment3',
  templateUrl: './payment3.page.html',
  styleUrls: ['./payment3.page.scss'],
})
export class Payment3Page implements OnInit {

  id;
  constructor() { }

  ngOnInit() {
  }


  changeMethod(val) {
    this.id = val;
  }

}
