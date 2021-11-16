import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mhome2',
  templateUrl: './mhome2.page.html',
  styleUrls: ['./mhome2.page.scss'],
})
export class Mhome2Page implements OnInit {
  searchbar: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  showSearchBar() {
    this.searchbar = !this.searchbar;
  }
  segmentChanged(ev) {
    
  }
}
