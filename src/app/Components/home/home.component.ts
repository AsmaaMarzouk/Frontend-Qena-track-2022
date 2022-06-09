import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/Models/store-data';
import { StoreInfo } from 'src/app/Models/store-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
// property with boolean type
// flag
showImg:boolean = true;

  // Interface
  storeInfo:StoreInfo={name:'ITI Store',
                       coverImage:'https://fakeimg.pl/250x100/',
                       branches:["Qena","Sohag","Smart","Alex"]};
   
                       

  // storedata=new StoreData('ITI from class','https://fakeimg.pl/250x100/',["Qena","Sohag","Smart","Alex"]);

  // class property
  storedata:StoreData;

  constructor() { 
    this.storedata=new StoreData('ITI from class','https://fakeimg.pl/250x100/',["Qena","Sohag","Smart","Alex"]);
  }

  toggleImage(){

    this.showImg=!this.showImg;
  }





  ngOnInit(): void {
  }

}
