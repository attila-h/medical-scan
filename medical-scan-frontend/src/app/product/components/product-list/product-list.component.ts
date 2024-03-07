import { Component, OnInit, inject } from '@angular/core';
import { ProductI } from '../../models/product.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromProducts from '../../../store/product-store/index';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  private readonly store = inject(Store);
  
  products$!: Observable<ProductI[]>;
  isLoading$!: Observable<boolean>;

  constructor() { }

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
