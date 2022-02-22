import { createAction, props } from '@ngrx/store';
import { Categoria } from 'src/app/core/categoria/model/categoria.model';

export const SET_LOADING_ACTION = '[shared state] set loading spinner';

export const SET_ERROR_MENSAJE = '[shared state] set error mensaje';

export const CATEGORIA_START = '[categoria state] start caterotia';
export const CATEGORIA_SUCCESS = '[categoria state] success caterotia';
export const CATEGORIA_FAIL = '[categoria state] fail caterotia';

//Cargando
export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION,
  props<{ state: boolean }>()
);

//Mensaje error

export const setErrorMensaje = createAction(
  SET_ERROR_MENSAJE,
  props<{ mensaje: string }>()
);

//Categoria

export const categoritaStart = createAction(
  CATEGORIA_START,
  props<{ id: number; nombre: string }>()
);

export const categoriaSuccess = createAction(
  CATEGORIA_SUCCESS,
  props<{ categoria: Categoria }>()
);
