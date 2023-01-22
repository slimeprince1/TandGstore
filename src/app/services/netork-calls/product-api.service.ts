import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(
     private http: HttpClient

  ) { }


  getProducts(filename : string){
    return require('../../../assets/mock/products.json')
   // return this.http.get('assets/mock/products.json');
  }

  
}

