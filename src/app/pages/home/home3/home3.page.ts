import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home3',
  templateUrl: './home3.page.html',
  styleUrls: ['./home3.page.scss'],
})
export class Home3Page implements OnInit {
  subjects;
  constructor(private router: Router) { }

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
