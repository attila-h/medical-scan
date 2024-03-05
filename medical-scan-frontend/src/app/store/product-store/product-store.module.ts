import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './product.reducers';
import { ProductEffects } from './product.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductStoreModule { }
