import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoriaState } from './categoria.state';

export const CAT_STATE_NAME = 'categoria';

export const getCategoriasState =
  createFeatureSelector<CategoriaState>('categoria');

export const getProductoCatState =
  createFeatureSelector<CategoriaState>('productos');

export const getCategorias = createSelector(getCategoriasState, (state) => {
  return state.categoria;
});

export const getProductoCat = createSelector(getCategoriasState, (state) => {
  return state.productos;
});
