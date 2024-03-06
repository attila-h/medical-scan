import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductStoreModule } from '../store/product-store/product-store.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ProductStoreModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    ProductService,
  ]
})
export class ProductModule { }
