import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/netork-calls/product-api.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products:any= [];
  tempProducts: any= [];
  constructor(
    private productApiService: ProductApiService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

private getProducts() {
  this.products = this.productApiService.getProducts('');
  this.tempProducts = this.productApiService.getProducts('');
//   this.productApiService.getProducts('products').subscribe((data: any)=>{
//     this.products = data;
//     console.log(data);
//     this.tempProducts = [...data];
//     },

// ( err: any) => {
//   console.log(err);
// }
//     );
  }

  addToCart(product:any){
    console.log(product);
  }
  
}
