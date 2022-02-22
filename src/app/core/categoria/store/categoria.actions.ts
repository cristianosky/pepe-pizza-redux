import { createAction, props } from '@ngrx/store';
import { Categoria } from '../model/categoria.model';

export const LOAD_CATEGORIA_START = '[categoria page] load categoria';
export const LOAD_CATEGORIA_SUCCESS = '[categoria paga] load success';

export const loadCategoria = createAction(
  LOAD_CATEGORIA_START,
  props<{ categoria: Categoria }>()
);

export const loadCategoriaSuccess = createAction(
  LOAD_CATEGORIA_SUCCESS,
  props<{ categria: Categoria[] }>()
);
