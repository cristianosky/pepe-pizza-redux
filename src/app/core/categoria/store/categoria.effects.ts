import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import { setLoadingSpinner } from 'src/app/shared/state/headers.actions';
import { AppState } from 'src/app/store/app.state';
import { CategoriaService } from '../services/categoria.service';
import {
  loadCategoria,
  loadCategoriaSuccess,
  loadProductoCatSuccess,
  loadProductosCat,
} from './categoria.actions';
import { MensajesService } from '../../../services/mensajes.service';

@Injectable()
export class CategoriaEffects {
  constructor(
    private actions$: Actions,
    private _categoria: CategoriaService,
    private store: Store<AppState>,
    private _alert: MensajesService
  ) {}

  loadCategorias$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCategoria),
      mergeMap((action) => {
        return this._categoria.loadCategoria().pipe(
          map((categori: any) => {
            return loadCategoriaSuccess({ categria: categori.datos });
          }),
          catchError((err) => {
            this._alert.alertaError(
              'error al momento de cargar las categorias',
              2000
            );
            return of();
          })
        );
      })
    );
  });

  loadProductosCat$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProductosCat),
      mergeMap((action) => {
        return this._categoria.loadProductosCat(action.id).pipe(
          map((productos: any) => {
            console.log(productos);
            this.store.dispatch(setLoadingSpinner({ state: false }));
            return loadProductoCatSuccess({ productos: productos.datos });
          }),
          catchError((err) => {
            this.store.dispatch(setLoadingSpinner({ state: false }));
            this._alert.alertaError(
              'Error al cargar los productos de esta categoria',
              200
            );
            return of();
          })
        );
      })
    );
  });
}
