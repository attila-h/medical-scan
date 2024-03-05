import { Action, createReducer, on } from '@ngrx/store';
import * as fromProducts from './index';
import { ProductState } from './product-store.model';

export const initialProductState: ProductState = {
    products: [],
    isLoading: false
};

const reducer = createReducer<ProductState>(
    initialProductState,
    on(fromProducts.getProducts, (state) => {
        return {
            ...state,
            isLoading: true
        };
    }),
    on(fromProducts.getProductsSuccess, (state, { products }) => {
        return {
            ...state,
            isLoading: false,
            products
        };
    }),
    on(fromProducts.createProduct, (state) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(fromProducts.createProductSuccess, (state, { product }) => {
        return {
            ...state,
            products: [...state.products, product],
            isLoading: false,
        };
    }),
    on(fromProducts.updateProduct, (state) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(fromProducts.updateProductSuccess, (state, { product }) => {
        return {
            ...state,
            products: state.products.map((p) => p.id === product.id ? product : p),
            isLoading: false,
        };
    }),
    on(fromProducts.deleteProduct, (state) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(fromProducts.deleteProductSuccess, (state, { product }) => {
        return {
            ...state,
            isLoading: false,
            products: state.products.filter((b) => b.id !== product.id)
        };
    })
);

export function productReducer(state = initialProductState, actions: Action): ProductState {
    return reducer(state, actions);
}
