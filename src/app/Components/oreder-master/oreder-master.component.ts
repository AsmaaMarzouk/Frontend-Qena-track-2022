import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-oreder-master',
  templateUrl: './oreder-master.component.html',
  styleUrls: ['./oreder-master.component.scss']
})
export class OrederMasterComponent implements OnInit ,AfterViewInit{
  catlList:Icategory[];
  selectedCatID:number = 0;
  receivedOrderTotalPrice:number = 0;


  // @ViewChild('clientName')  clientNameElem:ElementRef|null=null;
  // @ViewChild('clientName')  clientNameElem:ElementRef|undefined=undefined;
  // @ViewChild('clientName')  clientNameElem:ElementRef={} as ElementRef;

  // ? => safe navigation
  // @ViewChild('clientName')  clientNameElem?:ElementRef;

  // angular12 => ! (non null assertion operator) 
  @ViewChild('clientName')  clientNameElem!:ElementRef;

  // ? vs !

  // use ViewChild with component 
  @ViewChild(ProductsComponent) productsRef!:ProductsComponent;

  constructor() {
    this.catlList=[
      {id:1,name: 'Mobiles'},
      {id:2,name: 'LabTops'},
      {id:3,name: 'TV'},
    ];

   }
  ngAfterViewInit(): void {
    // if(this.clientNameElem)
    this.clientNameElem.nativeElement.value="Value from ts change..."
    console.log(this.productsRef.prdListOfCat);
    
  }

  ngOnInit(): void {
  }

  onTotalPriceChanged(totalPrice:number){

    this.receivedOrderTotalPrice=totalPrice;
  }

  // For test viewchild 
  getNewPrdArr(){
    console.log(this.productsRef.prdListOfCat);
    
  }
}
