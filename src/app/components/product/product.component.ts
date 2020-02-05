import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  /**Creando un evento */
  @Output() productClicked: EventEmitter<any> = new EventEmitter;

  addCar(){
    console.log('Agregar al carrito');
    this.productClicked.emit(this.product.id);
  }

}
