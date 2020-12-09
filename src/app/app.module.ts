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
    RamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
