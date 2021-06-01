import { Injectable } from "@angular/core";
import products from "../../assets/data/products.json"
import { Product } from "../entities/product";

@Injectable({
    providedIn: 'root'
  })

  export class ProductService{
    public productsList:{productId:number, productName:string, productWeight:string, productPrice:number, imageUrl:string}[] = products;
    product = new Product(1, "", "", 0, 1, "");
    shoppingBasket: Array<Product> = [];
    public filteredProducts:{productId:number, productName:string, productWeight:string, productPrice:number, imageUrl:string}[] = [];

    constructor(){}

    getProductById(productId: number){
        var product = this.productsList.filter(function(product){
            return product.productId === productId;   
        })
        this.product.id = product[0].productId;
        this.product.name = product[0].productName;
        this.product.weight = product[0].productWeight;
        this.product.price = product[0].productPrice;
        this.product.image = product[0].imageUrl;
        
    }

    addToCart(product: Product){
      //this.shoppingBasket.push(product);
      this.shoppingBasket.push(Object.assign({}, product));
    }

    caculateTotal(){
      let totalPrice = 0;
      this.shoppingBasket.forEach(element => {
        totalPrice += element.price * element.quantity;
      });
      return totalPrice;
    }

    filterProducts(searchText: any){
      this.filteredProducts = [];

       this.productsList.filter((p) =>{
          if ( p.productName.toLowerCase().includes(searchText.toLowerCase())) {
              this.filteredProducts.push(p);
          }
      })
  }
}