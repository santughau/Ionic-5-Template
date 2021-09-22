import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list4',
  templateUrl: './list4.page.html',
  styleUrls: ['./list4.page.scss'],
})
export class List4Page implements OnInit {

  title;
  chapters;
  segId = 'Tests';
  constructor() { }

  ngOnInit() {
    this.chapters = [
      {
        img: 'assets/light.jpg',
        name: 'Theory of Light',
        per: 90
      },
      {
        img: 'assets/water.jpg',
        name: 'Theory of Water',
        per: 40
      },
      {
        img: 'assets/motion.jpg',
        name: 'Theory of Motion',
        per: 50
      },
      {
        img: 'assets/sound.jpg',
        name: 'Theory of Sound',
        per: 65
      },
      {
        img: 'assets/sky.jpg',
        name: 'Theory of Sky',
        per: 75
      },
      {
        img: 'assets/energy.jpg',
        name: 'Theory of Energy',
        per: 45
      },
    ];
  }

  segmentChanged(val) {
    this.segId = val.target.value;
  }

}
