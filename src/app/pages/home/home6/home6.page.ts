import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home6',
  templateUrl: './home6.page.html',
  styleUrls: ['./home6.page.scss'],
})
export class Home6Page implements OnInit {
  subjects;
  constructor() { }

  ngOnInit() {
    this.subjects = [

      {
        img: 'assets/english.png',
        name: 'English'
      },
      {
        img: 'assets/chemistry.png',
        name: 'Chemistry'
      },
      {
        img: 'assets/statistics.png',
        name: 'Statistics'
      },
      {
        img: 'assets/maths.png',
        name: 'Mathamatics'
      },
      {
        img: 'assets/physics.png',
        name: 'Physics'
      },
      {
        img: 'assets/social.png',
        name: 'Social Science'
      },
    ];
  }

  goToSubject() {

  }

}
