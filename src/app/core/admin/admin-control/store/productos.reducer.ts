import { createReducer, on } from '@ngrx/store';
import { loadProductosSuccess } from './productos.actions';
import { InitState } from './productos.state';

const _productosReducer = createReducer(
  InitState,
  on(loadProductosSuccess, (state, action) => {
    return {
      ...state,
      productos: action.productos,
    };
  })
);

export function productosReducer(state: any, action: any) {
  return _productosReducer(state, action);
}
