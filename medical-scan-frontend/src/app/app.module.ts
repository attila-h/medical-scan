import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductModule } from './product/product.module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    ProductModule,
    MatSnackBarModule,
  ],
  providers: [
    provideAnimationsAsync(),
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000}},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
