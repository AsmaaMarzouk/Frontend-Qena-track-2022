import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges {
  // date
  todayDate:Date=new Date();
// declare array from interface => Iproduct
// prdList:Iproduct[];
// Day3
prdListOfCat: Iproduct[]=[];
@Input() receivedCatID:number = 0;
orderTotalPrice:number=0;

@Output() totalPriceChanged:EventEmitter<number>;
// Day2
// Category array
// catlList:Icategory[];
selectedCatID:number = 0;

  constructor(private prdService:ProductService,private router:Router) {
    // create object of event EventEmitter
    this.totalPriceChanged=new EventEmitter<number>();
    // this.prdList=[
    //   {id:1,name: 'Samsung',price:20000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:1},
    //   {id:5,name: 'IPhone',price:60000,quantity:2,imgURL:'https://fakeimg.pl/250x100',catID:1},
    //   {id:7,name: 'Lenovo',price:30000,quantity:10,imgURL:'https://fakeimg.pl/250x100',catID:2},
    //   {id:9,name: 'Dell',price:25000,quantity:3,imgURL:'https://fakeimg.pl/250x100',catID:2},
    //   {id:9,name: 'LG',price:68000,quantity:1,imgURL:'https://fakeimg.pl/250x100',catID:3},
    //   {id:9,name: 'Toshipa',price:45000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:3},
    // ];


    // categories
    // this.catlList=[
    //   {id:1,name: 'Mobiles'},
    //   {id:2,name: 'LabTops'},
    //   {id:3,name: 'TV'},
    // ];
   }
  ngOnChanges(): void {
    // this.getProductOfCat();
    // Day4
  this.prdListOfCat= this.prdService.getProductByCatID(this.receivedCatID);

   
  }


  ngOnInit(): void {
    // this.getProductOfCat();
    // Day4
    // this.prdListOfCat= this.prdService.getProductByCatID(this.receivedCatID);

  }


  trackByFunc(index:number,item:Iproduct){
    return item.id;

   }

  // private getProductOfCat(){

  //   if(this.receivedCatID==0){
  //     this.prdListOfCat=Array.from(this.prdList);
  //     return;

  //   }
  //   this.prdListOfCat=this.prdList.filter((prd)=>prd.catID==this.receivedCatID);

  //  }


   updateTotalPrice(prdPrice:number,itemCounts:any) {
    // this.orderTotalPrice +=(prdPrice*itemCounts);
    //ways of convert string to number
    // this.orderTotalPrice +=(prdPrice* parseInt(itemCounts));
    // this.orderTotalPrice +=(prdPrice* Number(itemCounts));
    // this.orderTotalPrice +=(prdPrice* itemCounts as number);
    this.orderTotalPrice +=(prdPrice* +itemCounts);

    // to fire event use emit
    this.totalPriceChanged.emit(this.orderTotalPrice);

   }

  //  Day4
  openProductDetails(prdId:number){

    // this.router.navigate(['path',parameter of function])
    this.router.navigate(['Products',prdId]);
  }


}
