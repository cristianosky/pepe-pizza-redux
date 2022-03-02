import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap, take } from 'rxjs';
import { MensajesService } from 'src/app/services/mensajes.service';
import { setLoadingSpinner } from 'src/app/shared/state/headers.actions';
import { AppState } from 'src/app/store/app.state';
import { ProductosService } from '../services/productos.service';
import {
  addProdcuto,
  addProductoSuccess,
  deleteProducto,
  deleteProductoSuccess,
  loadProductos,
  loadProductosSuccess,
} from './productos.actions';

@Injectable()
export class ProductosEffects {
  constructor(
    private action$: Actions,
    private _Productos: ProductosService,
    private store: Store<AppState>,
    private _alert: MensajesService,
    private dialog: MatDialog
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

  addProductos$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(addProdcuto),
        mergeMap((action) => {
          return this._Productos.addProductos(action.productos).pipe(
            map((data: any) => {
              console.log(data);
              if (data.status) {
                this.store.dispatch(setLoadingSpinner({ state: false }));
                this._alert.alertaSucces('Se agrego correctamente', 2000);
                this.dialog.closeAll();
                return of(addProductoSuccess({ productos: action.productos }));
              } else {
                this.store.dispatch(setLoadingSpinner({ state: false }));
                this._alert.alertaError('Error al agregra', 2000);
                return of();
              }
            })
          );
        })
      );
    },
    { dispatch: false }
  );

  deleteProductos$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(deleteProducto),
        mergeMap((action) => {
          return this._Productos.deleteProductos(action.id).pipe(
            map(
              (producto: any) => {
                if (producto.status) {
                  this.store.dispatch(setLoadingSpinner({ state: false }));
                  this._alert.alertaSucces('Se elimino correctamete', 2000);
                  return of(deleteProductoSuccess({ id: action.id }));
                } else {
                  this.store.dispatch(setLoadingSpinner({ state: false }));
                  this._alert.alertaSucces(producto.mensaje, 2000);
                  return of();
                }
              },
              catchError((err) => {
                this.store.dispatch(setLoadingSpinner({ state: false }));
                this._alert.alertaSucces('Error desconocido', 2000);
                return of();
              })
            )
          );
        })
      );
    },
    { dispatch: false }
  );
}
