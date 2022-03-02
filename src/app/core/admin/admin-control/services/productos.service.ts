import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Productos } from '../model/productos.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  loadProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.url}/getproductos`);
  }

  addProductos(Producto: Productos) {
    return this.http.post(`${this.url}/agregarproductos`, Producto);
  }

  deleteProductos(id: number) {
    return this.http.get(`${this.url}/eliminarproducto?id=${id}`);
  }
}
