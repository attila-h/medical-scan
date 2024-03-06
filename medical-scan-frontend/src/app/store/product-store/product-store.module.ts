import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './product.reducers';
import { ProductEffects } from './product.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature([ProductEffects]),
    MatSnackBarModule,
  ]
})
export class ProductStoreModule { }
