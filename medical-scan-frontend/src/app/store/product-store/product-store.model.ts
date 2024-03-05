import { ProductI } from "../../product/models/product.model";

export interface ProductState {
  products: ProductI[];
  isLoading: boolean;
}