import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next5',
  templateUrl: './next5.page.html',
  styleUrls: ['./next5.page.scss'],
})
export class Next5Page implements OnInit {
  students;
  slideOpts = {
    slidesPerView: 1.5
  }
  constructor() { }

  ngOnInit() {
    this.students = [
      {
        img: 'assets/1.jpg',
        name: 'Miss Priyanka'
      },
      {
        img: 'assets/2.jpg',
        name: 'Miss Yamini'
      },
      {
        img: 'assets/4.jpg',
        name: 'Miss Laxmi'
      },
      {
        img: 'assets/6.jpg',
        name: 'Miss Piyusha'
      },
      {
        img: 'assets/8.jpg',
        name: 'Miss Swara'
      }
    ];
  }
  goBack() {

  }



}
