import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import * as fromProducts from './index';
import { ProductService } from '../../product/services/product.service';
import { ProductI } from '../../product/models/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ProductEffects {

    private readonly actions$ = inject(Actions);
    private readonly productService = inject(ProductService); 
    private readonly snackBar = inject(MatSnackBar);

    constructor() { }

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
            tap(() => this.snackBar.open('Successfully created')),
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
