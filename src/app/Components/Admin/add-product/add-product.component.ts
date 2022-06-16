import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
catlList:Icategory[];
newPrd:Iproduct={} as Iproduct;
  constructor(private prdAPIservice:ProductsApiService,
    private router:Router) 
    {
      this.catlList=[
        {id:1,name: 'Mobiles'},
        {id:2,name: 'LabTops'},
        {id:3,name: 'TV'},
      ];
     }

  ngOnInit(): void {
  }


  InsertProduct(){
    // let testPrd:Iproduct={
    //   id:99,
    //   name: 'NewProduct',
    //   price:333333,
    //   quantity:8,
    //   imgURL:'https://fakeimg.pl/250x100',
    //   catID:1
    // };
    // this.prdAPIservice.addProduct(testPrd).subscribe({
    //   next:(prd)=>{
    //     this.router.navigate(['/Products']);
    //   },
    //   error:(err)=>{
    //     alert("Error occured: ");
    //   }
    // })


    // Second case
    this.prdAPIservice.addProduct(this.newPrd).subscribe({
      next:(prd)=>{
        this.router.navigate(['/Products']);
      },
      error:(err)=>{
        alert("Error occured: ");
      }
    })


  }

}
