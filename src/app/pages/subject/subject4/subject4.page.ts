import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject4',
  templateUrl: './subject4.page.html',
  styleUrls: ['./subject4.page.scss'],
})
export class Subject4Page implements OnInit {
  title;
  chapters;
  segId = 'Chapters';
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

  segmentChanged(eve) {
    this.segId = eve.details.value;
  }


}
