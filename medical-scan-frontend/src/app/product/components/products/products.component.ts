import { Component, OnInit } from '@angular/core';
import { ProductI } from '../../models/product.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromProducts from '../../../store/product-store/index';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products$!: Observable<ProductI[]>;
  isLoading$!: Observable<boolean>;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions();
  }

  onDelete(product: ProductI): void {
    this.store.dispatch(fromProducts.deleteProduct({product}));
  }

  private initDispatch(): void {
    this.store.dispatch(fromProducts.getProducts());
  }

  private initSubscriptions(): void {
    this.products$ = this.store.pipe(select(fromProducts.selectProductsList));
    this.isLoading$ = this.store.pipe(select(fromProducts.selectProductIsLoading));
  }
  
}
