import { createAction, props } from '@ngrx/store';
import { Categoria, Productos } from '../model/categoria.model';

export const LOAD_CATEGORIA_START = '[categoria page] load categoria';
export const LOAD_CATEGORIA_SUCCESS = '[categoria page] load success';

export const LOAD_PRODUCTOS_CAT = '[categoria page] load productos categoria';
export const LOAD_PRODUCTOS_CAT_SUCCESS =
  '[categoria page] load productos categoria success';

export const loadCategoria = createAction(LOAD_CATEGORIA_START);

export const loadProductosCat = createAction(
  LOAD_PRODUCTOS_CAT,
  props<{ id: number }>()
);

export const loadCategoriaSuccess = createAction(
  LOAD_CATEGORIA_SUCCESS,
  props<{ categria: Categoria[] }>()
);

export const loadProductoCatSuccess = createAction(
  LOAD_PRODUCTOS_CAT_SUCCESS,
  props<{ productos: Productos[] }>()
);
