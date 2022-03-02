import { createReducer, on } from '@ngrx/store';
import {
  addProductoSuccess,
  loadProductosSuccess,
  deleteProductoSuccess,
} from './productos.actions';
import { InitState } from './productos.state';

const _productosReducer = createReducer(
  InitState,
  on(loadProductosSuccess, (state, action) => {
    return {
      ...state,
      productos: action.productos,
    };
  }),
  on(addProductoSuccess, (state, action) => {
    return {
      ...state,
      productos: [...state.productos, action.productos],
    };
  }),
  on(deleteProductoSuccess, (state, { id }) => {
    const updatePro = state.productos.filter((x) => x.id != id);

    return {
      ...state,
      productos: updatePro,
    };
  })
);

export function productosReducer(state: any, action: any) {
  return _productosReducer(state, action);
}
