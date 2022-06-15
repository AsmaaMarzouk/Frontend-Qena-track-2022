import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, filter, map, retry, Subscription } from 'rxjs';
import { StoreData } from 'src/app/Models/store-data';
import { StoreInfo } from 'src/app/Models/store-info';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
// property with boolean type
// flag
showImg:boolean = true;
// Day2
customerFeedback:string ="GoodTest";

// Day5
// private Subscribtion!:Subscription;
private Subscribtion:Subscription[]= [];

  // Interface
  storeInfo:StoreInfo={name:'ITI Store',
                       coverImage:'https://fakeimg.pl/250x100/',
                       branches:["Qena","Sohag","Smart","Alex"]};
   
                       

  // storedata=new StoreData('ITI from class','https://fakeimg.pl/250x100/',["Qena","Sohag","Smart","Alex"]);

  // class property
  storedata:StoreData;

  constructor(private promoAds:PromotionAdsService) { 
    this.storedata=new StoreData('ITI from class','https://fakeimg.pl/250x100/',["Qena","Sohag","Smart","Alex"]);
  }
 

  toggleImage(){

    this.showImg=!this.showImg;
  }





  ngOnInit(): void {
    // let obsever={//handle next() error() complete()};
    // let obsever={
    //   next:(data:string)=>{
    //     console.log(data);
    //   },
    //   error:(err:string)=>{

    //     console.log(err);
        
    //   },
    //   complete:()=>{
    //     console.log("Ads Finishedddddd");
    // // this.promoAds.getScheduleAds(2).subscribe(obsever);

        
    //   }
    // };
    // this.promoAds.getScheduleAds(2).subscribe(obsever);

    // let adsSubscribtion:Subscription = this.promoAds.getScheduleAds(2).subscribe({
    //  this.Subscribtion = this.promoAds.getScheduleAds(2).subscribe({
    //   next:(data:string)=>{
    //     console.log(data);
    //   },
    //   error:(err:string)=>{

    //     console.log(err);
        
    //   },
    //   complete:()=>{
    //     console.log("Ads Finishedddddd");
        
    //   }
    // });

    // let adsSubscribtion = this.promoAds.getScheduleAds(2).subscribe({
    //   next:(data:string)=>{
    //     console.log(data);
    //   },
    //   error:(err:string)=>{

    //     console.log(err);
        
    //   },
    //   complete:()=>{
    //     console.log("Ads Finishedddddd");
        
    //   }
    // });

    // this.Subscribtion.push(adsSubscribtion);




    // For test operator
    //  let obsever={
    //   next:(data:string)=>{
    //     console.log(data);
    //   },
    //   error:(err:string)=>{

    //     console.log(err);
        
    //   },
    //   complete:()=>{
    //     console.log("Ads Finishedddddd");
    // // this.promoAds.getScheduleAds(2).subscribe(obsever);

        
    //   }
    // };
    // let FilterObservableData=this.promoAds.getScheduleAds(2).pipe(
    //   filter(ad=>ad.includes("Black friday"))
    //   ,map(ad=>"Ad: "+ad)
      
    // );
    // // let FilterObservableData=this.promoAds.getScheduleAds(2).pipe(
    // //   retry(4),
    // //   catchError()
    // // )
    // let adsSubscribtion=FilterObservableData.subscribe(obsever);
    // this.Subscribtion.push(adsSubscribtion);



    // Not best sol
    // adsSubscribtion.unsubscribe();

    // old syntax
  //   this.promoAds.getScheduleAds(2).subscribe(
  //     (data)=>{console.log(data);},
  //     (err)=>{},
  //     ()=>{});
  // }

  // this syntax for one test case
//   this.promoAds.getScheduleAds(2).subscribe(
//     (data)=>{console.log(data);})


let sub=this.promoAds.getAllAds().subscribe(ad=>{
  console.log(ad);
  
})
this.Subscribtion.push(sub);
}
ngOnDestroy(): void {
  // this.Subscribtion.unsubscribe();
  for(let sub of this.Subscribtion){
    sub.unsubscribe();
  }
}

  }


