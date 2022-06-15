import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
// http client 
// angular 4.3 => promise  
// observable
  constructor(private httpClient: HttpClient) { }

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
}
