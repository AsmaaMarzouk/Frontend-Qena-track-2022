import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prdList:Iproduct[];

  constructor() { 
    this.prdList=[
      {id:1,name: 'Samsung',price:20000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:1},
      {id:5,name: 'IPhone',price:60000,quantity:2,imgURL:'https://fakeimg.pl/250x100',catID:1},
      {id:7,name: 'Lenovo',price:30000,quantity:10,imgURL:'https://fakeimg.pl/250x100',catID:2},
      {id:9,name: 'Dell',price:25000,quantity:3,imgURL:'https://fakeimg.pl/250x100',catID:2},
      {id:11,name: 'LG',price:68000,quantity:1,imgURL:'https://fakeimg.pl/250x100',catID:3},
      {id:15,name: 'Toshipa',price:45000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:3},
    ];
  }

  // get all product
  getAllProducts():Iproduct[]
  {
    return this.prdList;
  }

  // get products with Category
  getProductByCatID(catID:number):Iproduct[]{
    if(catID==0){
      return this.getAllProducts();
    }
    else{
      return this.prdList.filter(prd=>prd.catID==catID);
    }
  }

  // get product by id
  getProductByID(prdID:number):Iproduct|undefined{
    return this.prdList.find(prd=>prd.id==prdID);
  }

  searchProductByName(prdName:string):Iproduct|undefined{

    return this.prdList.find(prd=>prd.name==prdName);
  }


  getPrdList():number[]{
    return this.prdList.map(prd=>prd.id);
  }

  // Add new product
  // For lab assignments
  addProduct(prd:Iproduct){
    this.prdList.push(prd);
  }
}
