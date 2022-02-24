import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setLoadingSpinner } from 'src/app/shared/state/headers.actions';
import { AppState } from 'src/app/store/app.state';
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
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadProductos());
    this.Productos$ = this.store.select(getProductos);
  }
}
