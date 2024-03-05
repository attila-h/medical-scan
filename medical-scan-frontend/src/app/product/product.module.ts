import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './components/products/products.component';
import { ProductStoreModule } from '../store/product-store/product-store.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsComponent,
  }
];

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductStoreModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    ProductService,
  ]
})
export class ProductModule { }
