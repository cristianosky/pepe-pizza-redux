import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from './headers.state';

export const HEADERS_STATE_NAME = 'headers';

const getHeadersState = createFeatureSelector<SharedState>(HEADERS_STATE_NAME);

export const getLoading = createSelector(getHeadersState, (state) => {
  return state.ShowLoading;
});

export const getMensajeError = createSelector(getHeadersState, (state) => {
  return state.errorMesajeError;
});
