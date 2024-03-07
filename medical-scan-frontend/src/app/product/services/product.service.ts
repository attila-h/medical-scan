import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProductI } from '../models/product.model';
import { EMPTY, Observable, catchError, of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private readonly snackBar = inject(MatSnackBar);
  private readonly apiUrl = `${environment.api.baseUrl}/product`
  private http = inject(HttpClient)

  constructor() { }

  public create(resource: Partial<ProductI>): Observable<ProductI> {
    return this.http
      .post<ProductI>(`${this.apiUrl}`, resource)
      .pipe(
        catchError((err) => this.handleError(err))
      )
  }

  public get(): Observable<ProductI[]> {
    return this.http
      .get<ProductI[]>(`${this.apiUrl}`)
      .pipe(
        catchError((err) => this.handleError(err))
      )
  }

  public getById(id: number): Observable<ProductI> {
    return this.http
      .get<ProductI>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((err) => this.handleError(err))
      )
  }

  public update(resource: Partial<ProductI>): Observable<ProductI> {
    return this.http
      .put<ProductI>(`${this.apiUrl}/${resource.id}`, resource)
      .pipe(
        catchError((err) => this.handleError(err))
      )
  }

  public delete(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((err) => this.handleError(err))
      )
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error)
    if (error.error instanceof ErrorEvent) {
      return throwError(error);
    } else {
      let errorMessage = 'API error'
      if (error.status === 404) errorMessage = 'Product not found'
      this.snackBar.open(errorMessage, 'Close', {
        panelClass: ['error-snackbar']
      });
      return EMPTY;
    }
  }
}
