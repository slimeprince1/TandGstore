import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductApiService } from 'src/app/services/netork-calls/product-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private router: ActivatedRoute,
    private productApiService: ProductApiService,
    private cartService: CartService,
    ) { 
      const id = Number(this.router.snapshot.paramMap.get('id')) || 0
      this.product = this.productApiService.getProducts('').find((p: Product) => p.id === id);
  }

  addProductToCart(product: Product): void { 
    this.cartService.addProductToCart(product);
  }
  
  ngOnInit(): void {
  }

}
