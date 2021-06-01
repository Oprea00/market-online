import { Component } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/service/product.service';

@Component({ templateUrl: 'checkout.component.html', styleUrls: ['checkout.css'] })
export class CheckoutComponent {
    public productsList:{productId:number, productName:string, productPrice:number, produtQuantity:number, imageUrl:string}[] = JSON.parse(JSON.stringify(this.productService.shoppingBasket));
    totalPrice = 0;

    constructor(public productService: ProductService){
        this.getTotalPrice();
    };

    public cart: Array<Product> = this.productService.shoppingBasket;

    getTotalPrice(){
        this.totalPrice = this.productService.caculateTotal();
    }
}