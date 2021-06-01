export class Product{
    id: number;
    name: string;
    weight: string;
    price: number;
    quantity: number;
    image: string;
  
    constructor($id: number, $name: string, $weight: string , $price: number, $quantity: number, $image: string) {
      this.id = $id;
      this.name = $name;
      this.weight = $weight;
      this.price = $price;
      this.quantity = $quantity;
      this.image = $image;
    }
  }