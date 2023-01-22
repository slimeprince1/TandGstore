import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './app-core/common/footer/footer.component';
import { HeaderComponent } from './app-core/common/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AddCartComponent } from './cart/add-cart/add-cart.component';
import { MyCartComponent } from './cart/my-cart/my-cart.component';
import { MyOrdersComponent } from './cart/my-orders/my-orders.component';
import { OrderDetailsComponent } from './cart/order-details/order-details.component';
import { PlaceOrderComponent } from './cart/place-order/place-order.component';
import { RemoveCartComponent } from './cart/remove-cart/remove-cart.component';
import { CheckoutOrderComponent } from './checkout/checkout-order/checkout-order.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListingComponent } from './product/product-listing/product-listing.component';
import { OrderConfirmationComponent } from './confirmation/order-confirmation/order-confirmation.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { TangledComponent } from './webpages/tangled/tangled.component';
import { VeildOppressionComponent } from './webpages/veild-oppression/veild-oppression.component';
import { MirrorGallonsComponent } from './webpages/mirror-gallons/mirror-gallons.component';
import { MellaninComponent } from './webpages/mellanin/mellanin.component';
import { HiddenRoseComponent } from './webpages/hidden-rose/hidden-rose.component';
import { ChiefGuardComponent } from './webpages/chief-guard/chief-guard.component';
import { CastleBerakuComponent } from './webpages/castle-beraku/castle-beraku.component';
import { MonochromeLabourComponent } from './webpages/monochrome-labour/monochrome-labour.component';
import { RandomStreetComponent } from './webpages/random-street/random-street.component';
import { AboutComponent } from './webpages/about/about.component';
import { ContactComponent } from './webpages/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SignUpComponent,
    AddCartComponent,
    MyCartComponent,
    MyOrdersComponent,
    OrderDetailsComponent,
    PlaceOrderComponent,
    RemoveCartComponent,
    CheckoutOrderComponent,
    ProductDetailsComponent,
    ProductListingComponent,
    OrderConfirmationComponent,
    HomepageComponent,
    TangledComponent,
    VeildOppressionComponent,
    MirrorGallonsComponent,
    MellaninComponent,
    HiddenRoseComponent,
    ChiefGuardComponent,
    CastleBerakuComponent,
    MonochromeLabourComponent,
    RandomStreetComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    
  ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
