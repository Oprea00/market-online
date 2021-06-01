import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/all-products';
import { BasketComponent } from './pages/basket';
import { CheckoutComponent } from './pages/checkout';
import { ConfirmationComponent } from './pages/confirmation';
import { ProductComponent } from './pages/product';
import { SearchComponent } from './pages/search';

const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: 'product/:productId', component: ProductComponent},
  { path: 'search/:productName', component: SearchComponent},
  { path: 'basket', component: BasketComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'confirmation', component: ConfirmationComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
