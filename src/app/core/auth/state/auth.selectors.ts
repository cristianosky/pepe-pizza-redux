import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const AUTH_STATE_NAME = 'auth';

const getAunthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAunthState, (state) => {
  return state.user ? true : false;
});

export const getUser = createSelector(getAunthState, (state) => {
  let body = {
    ...state.user?.perfil,
    isAdmin: state.user?.perfil.rol == 2 ? false : true,
  };

  return body;
});

export const isAdmin = createSelector(getAunthState, (state) => {
  return {
    isAdmin: state.user?.perfil.rol == 2 ? false : true,
  };
});
