import { createReducer, on } from '@ngrx/store';
import {
  loadCategoriaSuccess,
  loadProductoCatSuccess,
} from './categoria.actions';
import { InitState } from './categoria.state';

const _categoriaReducer = createReducer(
  InitState,
  on(loadCategoriaSuccess, (state, action) => {
    return {
      ...state,
      categoria: action.categria,
    };
  }),
  on(loadProductoCatSuccess, (state, action) => {
    return {
      ...state,
      productos: action.productos,
    };
  })
);

export function categoriaReducer(state: any, action: any) {
  return _categoriaReducer(state, action);
}
