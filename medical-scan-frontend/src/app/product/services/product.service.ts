import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProductI } from '../models/product.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly apiUrl = `${environment.api.baseUrl}/products`
  private http = inject(HttpClient)

  constructor() { }

  public create(resource: Partial<ProductI>): Observable<ProductI> {
    return this.http
      .post<ProductI>(`${this.apiUrl}`, resource)
  }

  public get(): Observable<ProductI[]> {
    return this.http
      .get<ProductI[]>(`${this.apiUrl}`)
  }

  public getById(id: number): Observable<ProductI> {
    return this.http
      .get<ProductI>(`${this.apiUrl}/${id}`)
  }

  public update(resource: Partial<ProductI>): Observable<ProductI> {
    return this.http
      .put<ProductI>(`${this.apiUrl}/${resource.id}`, resource)
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
