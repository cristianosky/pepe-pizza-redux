import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import {
  getCategorias,
  getProductoCat,
} from 'src/app/core/categoria/store/categoria.selectors';
import { ActivatedRoute } from '@angular/router';
import { loadProductosCat } from './store/categoria.actions';
import { Productos } from './model/categoria.model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  productos$!: Observable<Productos[]>;

  constructor(
    private store: Store<AppState>,
    private routeractivete: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params: any = this.routeractivete.snapshot.params;
    this.store.dispatch(loadProductosCat({ id: params.id }));
    this.productos$ = this.store.select(getProductoCat);
  }
}
