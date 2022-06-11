import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // date
  todayDate:Date=new Date();
// declare array from interface => Iproduct
prdList:Iproduct[];



// Category array
catlList:Icategory[];
selectedCatID:number = 0;
  constructor() {
    this.prdList=[
      {id:1,name: 'Samsung',price:20000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:1},
      {id:5,name: 'IPhone',price:60000,quantity:2,imgURL:'https://fakeimg.pl/250x100',catID:1},
      {id:7,name: 'Lenovo',price:30000,quantity:10,imgURL:'https://fakeimg.pl/250x100',catID:2},
      {id:9,name: 'Dell',price:25000,quantity:3,imgURL:'https://fakeimg.pl/250x100',catID:2},
      {id:9,name: 'LG',price:68000,quantity:1,imgURL:'https://fakeimg.pl/250x100',catID:3},
      {id:9,name: 'Toshipa',price:45000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:3},
    ];


    // categories
    this.catlList=[
      {id:1,name: 'Mobiles'},
      {id:2,name: 'LabTops'},
      {id:3,name: 'TV'},
    ];
   }
   trackByFunc(index:number,item:Iproduct){
    return item.id;

   }

  ngOnInit(): void {
  }

}
