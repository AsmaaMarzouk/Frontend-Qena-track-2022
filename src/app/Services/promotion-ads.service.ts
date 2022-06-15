import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
private adsList:string[];
  constructor() { 
    this.adsList=[
      "White Friday offers up to 50%",
      "Sales up to 70%",
      "Black friday starts",
      // "",
      "Special offers of Black friday"
    ] ;
  }
 
  getScheduleAds(intervalInSeconds:number):Observable<string>{
    // let ads=new Observable((observer)=>{
    //   observer.next();
    //   observer.error();
    //   observer.complete();
    // })
    return new Observable<string>((observer)=>{
      let counter=0;
      let adsTimer=setInterval(()=>{
        console.log("Still in interval");
        
        // complete
        if(counter==this.adsList.length)
        {
          observer.complete();
        }
        if(this.adsList[counter]=="")
        {
          observer.error("Error: empty ad");//stop observable

        }
        observer.next(this.adsList[counter]);
        counter++;
      },intervalInSeconds*1000);
      
    return{
      unsubscribe() {
        // will be called in three cases
        // 1- error  2- complete 3-unsubscribe
        clearInterval(adsTimer);
        console.log("In Unsubscribe observable");
        
      },
    }
    });


  }

  getAllAds():Observable<string>{
    // return from(this.adsList);
    return of("Ad1","Ad2","Ad3","Ad4","Ad5")
  }
}
