import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as fromProducts from './index';
import { ProductService } from '../../product/services/product.service';
import { ProductI } from '../../product/models/product.model';

@Injectable()
export class ProductEffects {

    constructor(
      private readonly actions$: Actions, 
      private readonly productService: ProductService
    ) { }

    getProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromProducts.getProducts.type),
            switchMap(() => this.productService.get()),
            map((products: ProductI[]) => fromProducts.getProductsSuccess({products}))
        )
    );

    createProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromProducts.createProduct),
            switchMap(({product}) => this.productService.create(product)),
            map((product: ProductI) => fromProducts.createProductSuccess({product}))
        )
    );

    updateProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromProducts.updateProduct),
            switchMap(({product}) => this.productService.update(product)),
            map((product: ProductI) => fromProducts.updateProductSuccess({product}))
        )
    );

    deleteProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromProducts.deleteProduct),
            switchMap(({product}) => this.productService.delete(product.id).pipe(map(() => product))),
            map((product: ProductI) => fromProducts.deleteProductSuccess({product}))
        )
    );
}
