import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoriaState } from './categoria.state';

export const getCategoriasState =
  createFeatureSelector<CategoriaState>('categoria');

export const getCategorias = createSelector(getCategoriasState, (state) => {
  return state.categoria;
});
