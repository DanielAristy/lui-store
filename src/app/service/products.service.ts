import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/img/Camis1.jpeg',
      title: 'Camiseta',
      price: 55000,
      description: 'Camisetas bordadas'
    },
    {
      id: '2',
      image: 'assets/img/Camis2.jpeg',
      title: 'Camiseta',
      price: 55000,
      description: 'Camisetas bordadas'
    },
    {
      id: '3',
      image: 'assets/img/Camis3.jpeg',
      title: 'Camiseta',
      price: 55000,
      description: 'Camisetas bordadas'
    },
    {
      id: '4',
      image: 'assets/img/Camis4.jpeg',
      title: 'Camiseta',
      price: 55000,
      description: 'Camisetas bordadas'
    },
    {
      id: '5',
      image: 'assets/img/Camis5.jpeg',
      title: 'Camiseta',
      price: 55000,
      description: 'Camisetas bordadas'
    },
    {
      id: '6',
      image: 'assets/img/Camis6.jpeg',
      title: 'Camiseta',
      price: 55000,
      description: 'Camisetas bordadas'
    },
  ];

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){
    return this.products.find(item => id === item.id);
  }
}
