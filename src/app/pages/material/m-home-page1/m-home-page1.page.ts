import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-home-page1',
  templateUrl: './m-home-page1.page.html',
  styleUrls: ['./m-home-page1.page.scss'],
})
export class MHomePage1Page implements OnInit {
  searchbar: boolean = false;
  heartIcon: string = 'heart-outline';
  showIcon:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  showSearchBar() {
    this.searchbar = !this.searchbar;
  }

  changeicon(): void{
    this.showIcon = !this.showIcon;
  }
}
