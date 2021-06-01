import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/service/product.service';

@Component({ templateUrl: 'search.component.html', styleUrls: ['search.css'] })
export class SearchComponent {
    product = new Product(1, "", "", 0, 0, "");
    public filteredProducts:{productId:number, productName:string, productWeight:string, productPrice:number, imageUrl:string}[]  = [];
    productName='';

    constructor(public router: Router, private route: ActivatedRoute, public productService: ProductService) {
        var productName = this.route.snapshot.paramMap.get('productName');
        console.log(productName);
        this.productName = String(productName);
        productService.filterProducts(productName);
        this.filteredProducts = this.productService.filteredProducts; console.log(this.filteredProducts);
    }

    sendProduct(selectedProduct: any){
        this.router.navigate(['product/', selectedProduct.productId]);       
     }
}