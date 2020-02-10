import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent} from './components/products/products.component';
import { DemoComponent } from './components/demo/demo.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'home',
  component: HomeComponent
  },
  {path: 'contact',
  component: ContactComponent
  },
  {path: 'products',
  component: ProductsComponent
  },
  {path: 'demo',
  component: DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
