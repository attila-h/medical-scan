import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductStoreModule } from '../store/product-store/product-store.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductRoutingModule } from './product-routing.module';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductUpdateComponent } from './components/product-update/product-update.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductFormComponent,
    ProductUpdateComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ProductStoreModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    ProductService,
  ]
})
export class ProductModule { }
