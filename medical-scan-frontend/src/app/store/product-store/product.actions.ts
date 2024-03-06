import { createAction, props } from '@ngrx/store';
import { ProductI } from '../../product/models/product.model';

const prefix = '[Products]';

export const getProducts = createAction(`${prefix} Get Products`);
export const getProductsSuccess = createAction(
    `${getProducts.type} Success`,
    props<{
        products: ProductI[];
    }>()
);

export const createProduct = createAction(
    `${prefix} Create Product`,
    props<{
        product: Partial<ProductI>;
    }>()
);

export const createProductSuccess = createAction(
    `${createProduct.type} Success`,
    props<{
        product: ProductI;
    }>()
);

export const updateProduct = createAction(
    `${prefix} Update Product`,
    props<{
        product: Partial<ProductI>;
    }>()
);

export const updateProductSuccess = createAction(
    `${updateProduct.type} Success`,
    props<{
        product: ProductI;
    }>()
);

export const deleteProduct = createAction(
    `${prefix} Delete Product`,
    props<{
        product: ProductI;
    }>()
);

export const deleteProductSuccess = createAction(
    `${deleteProduct.type} Success`,
    props<{
        product: ProductI;
    }>()
);
