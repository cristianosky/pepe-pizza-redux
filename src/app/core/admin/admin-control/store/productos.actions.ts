import { createAction, props } from '@ngrx/store';
import { Productos } from '../model/productos.model';

export const LOAD_PRODUCTOS_ACTION = '[productos page]  load productos';
export const LOAD_PRODUCTOS_SUCCESS =
  '[productos page]  load productos success';
export const ADD_PRODUCTO_ACTION = '[productos page] add producto';
export const ADD_PRODUCTO_SUCCESS = '[productos page] add producto success';
export const DELETE_PRODUCTO_ACTION = '[productos page] delete producto';
export const DELETE_PRODUCTO_SUCCESS =
  '[productos page] delete producto success';

export const loadProductos = createAction(LOAD_PRODUCTOS_ACTION);
export const addProdcuto = createAction(
  ADD_PRODUCTO_ACTION,
  props<{ productos: Productos }>()
);
export const deleteProducto = createAction(
  DELETE_PRODUCTO_ACTION,
  props<{ id: number }>()
);
export const loadProductosSuccess = createAction(
  LOAD_PRODUCTOS_SUCCESS,
  props<{ productos: Productos[] }>()
);
export const addProductoSuccess = createAction(
  ADD_PRODUCTO_SUCCESS,
  props<{ productos: Productos }>()
);
export const deleteProductoSuccess = createAction(
  DELETE_PRODUCTO_SUCCESS,
  props<{ id: number }>()
);
