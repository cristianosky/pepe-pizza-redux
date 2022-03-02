import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CarritoService } from 'src/app/services/carrito.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { AppState } from 'src/app/store/app.state';
import { Productos } from '../admin/admin-control/model/productos.model';
import { loadProductos } from '../admin/admin-control/store/productos.actions';
import { getProductos } from '../admin/admin-control/store/productos.selectors';
import { isAuthenticated } from '../auth/state/auth.selectors';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  productos$!: Observable<Productos[]>;
  loguado!: Observable<boolean>;
  constructor(
    private store: Store<AppState>,
    private _carrito: CarritoService,
    private _alert: MensajesService
  ) {}
  ngOnInit(): void {
    this.store.dispatch(loadProductos());
    this.productos$ = this.store.select(getProductos);
    this.loguado = this.store.select(isAuthenticated);
  }

  addCarrito(producto: Productos) {
    this._carrito.addCarrito(producto);
  }

  fail() {
    this._alert.alertaError('Debe ingresar antes de agregar un producto', 3000);
  }
}
