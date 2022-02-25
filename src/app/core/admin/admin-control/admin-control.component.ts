import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setLoadingSpinner } from 'src/app/shared/state/headers.actions';
import { AppState } from 'src/app/store/app.state';
import { ModalProductoComponent } from './components/modal-producto/modal-producto.component';
import { Productos } from './model/productos.model';
import { loadProductos } from './store/productos.actions';
import { getProductos } from './store/productos.selectors';

@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.css'],
})
export class AdminControlComponent implements OnInit {
  Productos$!: Observable<Productos[]>;
  constructor(private store: Store<AppState>, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(loadProductos());
    this.Productos$ = this.store.select(getProductos);
  }

  openDialog(data?: Productos) {
    const dialog = this.dialog.open(ModalProductoComponent, {
      width: '900px',
      data,
    });
  }
}
