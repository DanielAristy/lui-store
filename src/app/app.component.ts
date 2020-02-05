import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lui-store';

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

  clickProduct(id: number){
    console.log('Producto');
    console.log(id);
  }
}
