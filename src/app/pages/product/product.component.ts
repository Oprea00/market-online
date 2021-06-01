import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/service/product.service';

@Component({ templateUrl: 'product.component.html', styleUrls: ['product.css'] })
export class ProductComponent {
    dataRoute: any;
    product = new Product(1, "", "", 0, 0, "");
    quantities = [ 1, 2, 3, 4, 5];


    constructor(public router: Router, private route: ActivatedRoute, public productService: ProductService) {
        var productId = this.route.snapshot.paramMap.get('productId');
        this.productService.getProductById(Number(productId));
        this.product = this.productService.product;
        this.product.quantity = 1;
    }

    addToCart(){
        this.productService.addToCart(this.product);
    }

    setQuantity(value: number) {
       this.product.quantity= value;
      }
    
}