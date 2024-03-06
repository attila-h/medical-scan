import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ProductI } from '../../models/product.model';
import * as fromProducts from '../../../store/product-store/index';
import { Observable, finalize, map, tap } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.scss'
})
export class ProductUpdateComponent implements OnInit {

  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService)
  
  product: ProductI | null = null;
  isLoading: boolean = true;

  ngOnInit(): void {
    this.initSubscriptions();
  }

  onUpdate(product: Partial<ProductI>): void {
    this.store.dispatch(fromProducts.updateProduct({product}));
    this.router.navigate(['/products'])
  }

  private initSubscriptions(): void {
    this.isLoading = true
    this.productService.getById(Number(this.route.snapshot.paramMap.get('id')))
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(product => this.product = product)
  }
  
}
