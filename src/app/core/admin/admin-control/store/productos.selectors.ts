import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductosState } from './productos.state';

export const PRODUCTOS_STATE_NAME = 'productos';

const getProductosState = createFeatureSelector<ProductosState>('productos');

export const getProductos = createSelector(getProductosState, (state) => {
  return state.productos;
});
