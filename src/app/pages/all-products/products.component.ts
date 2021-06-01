import { Component } from '@angular/core';
import { Router } from '@angular/router';
import products from "../../../assets/data/products.json"
import { Product } from "../../entities/product";

@Component({ templateUrl: 'products.component.html', styleUrls: ['products.css'] })
export class ProductsComponent {
    public productsList:{productId:number, productName:string, productWeight:string, productPrice:number, imageUrl:string}[] = products;
    product = new Product(1, "", "", 0, 1, "");
    searchText = ''; 
    public filteredProducts:{productId:number, productName:string, productWeight:string, productPrice:number, imageUrl:string}[] = [];

    constructor(public router: Router) {}

    sendProduct(selectedProduct: any){
       this.router.navigate(['product/', selectedProduct.productId]);       
    }

    sendToSearch(){
        this.router.navigate(['search/', this.searchText]);
    }

    filterProducts(){
        this.filteredProducts = [];

         this.productsList.filter((p) =>{
            if ( p.productName.toLowerCase().includes(this.searchText.toLowerCase())) {
                this.filteredProducts.push(p);
            }
        })
        console.log(this.filteredProducts);
    this.searchText = '';  
    }
}