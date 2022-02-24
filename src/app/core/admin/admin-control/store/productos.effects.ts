import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, of, switchMap, take } from 'rxjs';
import { setLoadingSpinner } from 'src/app/shared/state/headers.actions';
import { AppState } from 'src/app/store/app.state';
import { ProductosService } from '../services/productos.service';
import { loadProductos, loadProductosSuccess } from './productos.actions';

@Injectable()
export class ProductosEffects {
  constructor(
    private action$: Actions,
    private _Productos: ProductosService,
    private store: Store<AppState>
  ) {}

  loadProductos$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadProductos),
      mergeMap(() => {
        return this.store
          .select((state) => state.productos.productos)
          .pipe(
            take(1),
            switchMap((productosState) => {
              if (productosState.length > 0) {
                this.store.dispatch(setLoadingSpinner({ state: false }));
                return of(loadProductosSuccess({ productos: productosState }));
              }
              return this._Productos.loadProductos().pipe(
                map((productos: any) => {
                  this.store.dispatch(setLoadingSpinner({ state: false }));
                  return loadProductosSuccess({ productos: productos.datos });
                })
              );
            })
          );
      })
    );
  });
}
