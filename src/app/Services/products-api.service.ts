import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
// http client 
// angular 4.3 => promise  
// observable
private httpOptions={};

  constructor(private httpClient: HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
  }

  getAllProducts():Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.APIBaseURL}/products`);
  }
  getProductsByCatID(catID:number):Observable<Iproduct[]>
  {
    return this.httpClient.get<Iproduct[]>(`${environment.APIBaseURL}/products?catID=${catID}`);

  }
  getProductByID(prdID:number):Observable<Iproduct>
  {
    return this.httpClient.get<Iproduct>(`${environment.APIBaseURL}/products/${prdID}`)
  }



  addProduct(newPrd:Iproduct):Observable<Iproduct>{
    return this.httpClient.post<Iproduct>(`${environment.APIBaseURL}/products`,
                                              JSON.stringify(newPrd),
                                              this.httpOptions)
                                              // handle error in post method
                                              // .pipe(
                                              //   retry(3),
                                              //   catchError((err)=>{
                                              //     return throwError(()=>{
                                              //       return new Error('Error occured , please try again')
                                              //     });
                                              //   })
                                              // )
  }
}
