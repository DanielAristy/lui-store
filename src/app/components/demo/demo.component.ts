import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  items = ['Daniel', 'Guillermo', 'Juan David', 'Lillyam', 'Natalia', 'Maria Jose'];

  power = 10;

  ngOnInit() {
  }

  addItem(name: string){
    this.items.push(name);
  }

  deleteItem( index: number){
    this.items.splice(index, 1);
  }

  clickProduct (id: number){
    console.log('Product');
    console.log(id);
  }

}
