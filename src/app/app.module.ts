import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/all-products';
import { ProductComponent } from './pages/product';
import { BasketComponent } from './pages/basket';
import { CheckoutComponent } from './pages/checkout';
import { FilterPipe } from './service/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from './pages/confirmation';
import { SearchComponent } from './pages/search';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    BasketComponent,
    CheckoutComponent,
    ConfirmationComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
