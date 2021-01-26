import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrandsComponent } from './brands/brands.component';
import { ProcessorsComponent } from './processors/processors.component';
import { GraphicCardsComponent } from './graphic-cards/graphic-cards.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { BestproductsComponent } from './bestproducts/bestproducts.component';
import { ComputersComponent } from './computers/computers.component';
import { RamComponent } from './ram/ram.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { SpecificationComponent } from './detail/specification/specification.component';
import { CommentComponent } from './detail/comment/comment.component';
import { SimilarComponent } from './detail/similar/similar.component';
import { ProceedComponent } from './proceed/proceed.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule} from '@angular/forms';
import { ProceedCartComponent } from './proceed/proceed-cart/proceed-cart.component';
import { ProceedUserComponent } from './proceed/proceed-user/proceed-user.component';
import { ProceedPaymentComponent } from './proceed/proceed-payment/proceed-payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MyordersComponent } from './myorders/myorders.component';
import { CheckorderComponent } from './myorders/checkorder/checkorder.component';
import { OrderComponent } from './myorders/order/order.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BrandsComponent,
    ProcessorsComponent,
    GraphicCardsComponent,
    SearchComponent,
    BestproductsComponent,
    ComputersComponent,
    RamComponent,
    CartComponent,
    DetailComponent,
    SpecificationComponent,
    CommentComponent,
    SimilarComponent,
    ProceedComponent,
    FooterComponent,
    ProceedCartComponent,
    ProceedUserComponent,
    ProceedPaymentComponent,
    InvoiceComponent,
    MyordersComponent,
    CheckorderComponent,
    OrderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
