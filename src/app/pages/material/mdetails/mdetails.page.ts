import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdetails',
  templateUrl: './mdetails.page.html',
  styleUrls: ['./mdetails.page.scss'],
})
export class MdetailsPage implements OnInit {
  photo = [
    {"img" : "002.jpg"},
    {"img" : "004.jpg"},
    {"img" : "005.jpg"},
    {"img" : "008.jpg"},
    {"img" : "007.jpg"},
  ];
  varient = [
    { "varient": 'A' },
    { "varient": 'B' },
    { "varient": 'C' },
    { "varient": 'D' },
    { "varient": 'E' },
  ];
  colorVarient = [
    { "varient": 'red' },
    { "varient": 'orange' },
    { "varient": 'yellow' },
    { "varient": 'blue' },
    { "varient": 'purple' },
  ];
  bannerImage: string = '002.jpg';
  changeColorProperty:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  changeImage(img) {
    console.log(img);
    this.bannerImage = img;    
  }

  toggleClass(item?) {
    let options = document.querySelectorAll("div.round");
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("selectedColor");
    }
    options[item].classList.add("selectedColor");
  }

}
