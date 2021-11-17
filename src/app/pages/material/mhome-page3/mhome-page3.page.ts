import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mhome-page3',
  templateUrl: './mhome-page3.page.html',
  styleUrls: ['./mhome-page3.page.scss'],
})
export class MhomePage3Page implements OnInit {
  searchbar: boolean = false;
  heartIcon: string = 'heart-outline'
  showIcon: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  showSearchBar() {
    this.searchbar = !this.searchbar;
  }

  changeIcon() {
    this.showIcon = !this.showIcon;
  }
}
