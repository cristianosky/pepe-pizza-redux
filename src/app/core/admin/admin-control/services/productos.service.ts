import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  loadProductos() {
    return this.http.get(`${this.url}/getproductos`);
  }
}
