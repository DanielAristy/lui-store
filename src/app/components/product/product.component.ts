import { Component, OnInit, Input, Output } from '@angular/core';
import { Product} from '../../model/product';
import { from } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() product: Product;

  addCar(){
    console.log('Agregar al carrito');
  }

}
