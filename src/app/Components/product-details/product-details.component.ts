import {Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { findIndex } from 'rxjs';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  prd:Iproduct|undefined=undefined;
  prdIDList:number[]=[];
  currPrdID:number=0;
 private currentIndex:number=0;
  constructor(private prdService:ProductService,
              private router:Router,
              private location:Location,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // First test case
    // let sendPrdID=this.activatedRoute.snapshot.paramMap.get('pid');
    // console.log(sendPrdID);

    // second test case
    // ternary => 
    // let sendPrdID:number=(this.activatedRoute.snapshot.paramMap.get('pid'))?Number((this.activatedRoute.snapshot.paramMap.get('pid'))):0;

    // let foundPrd=this.prdService.getProductByID(sendPrdID);
    // if(foundPrd)
    // {
    //   this.prd=foundPrd;
    // }
    // else{
    //   alert("Invalid product");
    //   this.location.back();
    // }

    // third case
   this.prdIDList= this.prdService.getPrdList();
  //  console.log(this.prdIDList);
  // this.currentIndex=this.prdIDList.findIndex((item)=>item==this.currPrdID);//put in goprev()&gonext()
  // this.currPrdID=(this.activatedRoute.snapshot.paramMap.get('pid'))?Number((this.activatedRoute.snapshot.paramMap.get('pid'))):0;
  //   let foundPrd=this.prdService.getProductByID(this.currPrdID);
  //   if(foundPrd)
  //   {
  //     this.prd=foundPrd;
  //   }
  //   else{
  //     alert("Invalid product");
  //     this.location.back();
  //   }

  // forth test case
  this.activatedRoute.paramMap.subscribe(paramMap=>{
  // this.currPrdID=(paramMap.get('pid'))?Number((this.activatedRoute.snapshot.paramMap.get('pid'))):0;
  this.currPrdID=(paramMap.get('pid'))?Number((paramMap.get('pid'))):0;
   let foundPrd=this.prdService.getProductByID(this.currPrdID);
    if(foundPrd)
    {
      this.prd=foundPrd;
    }
    else{
      alert("Invalid product");
      this.location.back();
    }
  })
   

    

  }

  goBack(){

    this.location.back();

  }

  goPrev(){
  this.currentIndex=this.prdIDList.findIndex((item)=>item==this.currPrdID);
  this.router.navigate(['/Products',this.prdIDList[--this.currentIndex]])

  }
  goNext(){
  this.currentIndex=this.prdIDList.findIndex((item)=>item==this.currPrdID);
  this.router.navigate(['/Products',this.prdIDList[++this.currentIndex]])

  }

  searchProduct(prdName:string){
    let foundedPrd=this.prdService.searchProductByName(prdName);
    if(foundedPrd){
      this.prd=foundedPrd;
    }
    else{
      alert("Not found product");
    }
  }

}
