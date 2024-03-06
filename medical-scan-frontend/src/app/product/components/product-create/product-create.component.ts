import { Component, inject } from '@angular/core';
import { ProductI } from '../../models/product.model';
import { Store } from '@ngrx/store';
import * as fromProducts from '../../../store/product-store/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent {

  private readonly store = inject(Store);
  private readonly router = inject(Router);
  
  onCreate(product: Partial<ProductI>): void {
    this.store.dispatch(fromProducts.createProduct({product}));
    this.router.navigate(['/products'])
  }

}
