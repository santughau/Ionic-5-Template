import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment1',
  templateUrl: './payment1.page.html',
  styleUrls: ['./payment1.page.scss'],
})
export class Payment1Page implements OnInit {
id;
  constructor() { }

  ngOnInit() {
  }


  changeMethod(val){
    this.id = val;
  }
}
