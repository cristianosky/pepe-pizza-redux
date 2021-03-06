import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  loadCategoria() {
    return this.http.get(`${this.url}/getcategorias`);
  }

  loadProductosCat(id: number) {
    return this.http.get(`${this.url}/getproductocat?categoria=${id}`);
  }
}
