import { createAction, props } from '@ngrx/store';
import { Productos } from '../model/productos.model';

export const LOAD_PRODUCTOS_ACTION = '[productos page]  load productos';
export const LOAD_PRODUCTOS_SUCCESS =
  '[productos page]  load productos success';

export const loadProductos = createAction(LOAD_PRODUCTOS_ACTION);

export const loadProductosSuccess = createAction(
  LOAD_PRODUCTOS_SUCCESS,
  props<{ productos: Productos[] }>()
);
