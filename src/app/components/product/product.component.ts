import { Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  SimpleChanges, 
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product} from '../../model/product';
import { from } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements  OnInit, DoCheck, OnDestroy {

 
  @Input() product: Product;

  /**Creando un evento */
  @Output() productClicked: EventEmitter<any> = new EventEmitter;

  constructor() { 
    console.log('1. constructor');
  }
  /**Dectar los cambios 
  ngOnChanges(changes: SimpleChange){
    console.log('2. ngOnChanges');
    console.log(changes);
  } */

  ngOnInit(){
    console.log('3. ngOnInit');
  }

  ngDoCheck(){
    console.log('4. ngDoCheck');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  addCar(){
    console.log('Agregar al carrito');
    this.productClicked.emit(this.product.id);
  }

}
