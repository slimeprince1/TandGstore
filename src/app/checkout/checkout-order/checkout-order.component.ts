import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.scss']
})
export class CheckoutOrderComponent implements OnInit {

  cartProducts;

  constructor(private cartService: CartService) {
    this.cartProducts = cartService.myData$;
  }

  removeProductFromCart(product: Product) {
    this.cartService.removeProductFromCart(product);
  }

  ngOnInit() {
    this.cartService.getCartProducts();
  }
}
