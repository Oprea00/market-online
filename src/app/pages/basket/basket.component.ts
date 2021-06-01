import { Component } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/service/product.service';

@Component({ templateUrl: 'basket.component.html', styleUrls: ['basket.css'] })
export class BasketComponent {
    public productsList:{productId:number, productName:string, productWeight:string, productPrice:number, produtQuantity:number, imageUrl:string}[] = JSON.parse(JSON.stringify(this.productService.shoppingBasket));
    totalPrice = 0;
    quantities = [ 1, 2, 3, 4, 5];

    constructor(public productService: ProductService){
        this.getTotalPrice();
    };

    public cart: Array<Product> = this.productService.shoppingBasket;

    getTotalPrice(){
        this.totalPrice = this.productService.caculateTotal();
    }

    setQuantity(value: number, id: number) {
        this.productService.getProductById(id);
        this.cart.forEach(element => {
            if (element.id == id){
                element.quantity = value;
            }
        });
        this.getTotalPrice();
      }

    removeItem(id: number){
        this.productService.shoppingBasket = this.productService.shoppingBasket.filter(item => item.id !== id);
        this.cart = this.productService.shoppingBasket;
        this.getTotalPrice();
    }
}