import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.page.html',
  styleUrls: ['./demo3.page.scss'],
})
export class Demo3Page implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this._router.navigate(['/home1']);
  }
}
