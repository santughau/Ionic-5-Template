import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mlist',
  templateUrl: './mlist.page.html',
  styleUrls: ['./mlist.page.scss'],
})
export class MlistPage implements OnInit {
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
