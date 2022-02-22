import { createReducer, on } from '@ngrx/store';
import { loadCategoriaSuccess } from './categoria.actions';
import { InitState } from './categoria.state';

const _categoriaReducer = createReducer(
  InitState,
  on(loadCategoriaSuccess, (state, action) => {
    return {
      ...state,
      categoria: action.categria,
    };
  })
);

export function categoriaReducer(state: any, action: any) {
  return _categoriaReducer(state, action);
}
