import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartProducts;

  constructor(private cartService: CartService) {
    this.cartProducts = cartService.myData$;
  }

  ngOnInit() {
    this.cartService.getCartProducts();
  }

  cartIsNotEmpty() {
    return !this.cartService.isCartEmpty();
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
