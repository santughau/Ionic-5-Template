import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {
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

  goToSubject(){

  }

}
