import { createAction, props } from '@ngrx/store';
import { User } from '../model/auth.model';

// Login
export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';

// Register

export const REGISTER_START = '[register page] register start';
export const REGISTER_SUCCESS = '[register page] register success';
export const FAIL_START = '[register page] register fail';

// Salir

export const LOGOUT_ACTION = '[logout page] logout';

//autologin

export const AUTO_LOGIN_ACTION = '[auth pague] auto login';

//Login
export const loginStrar = createAction(
  LOGIN_START,
  props<{ email: any; password: any }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User; redireccion: boolean }>()
);

//Register

export const registerStrar = createAction(
  REGISTER_START,
  props<{ name: string; email: string; password: string }>()
);

export const registerSuccess = createAction(
  REGISTER_SUCCESS,
  props<{ user: User; redireccion: boolean }>()
);

export const autoLogin = createAction(AUTO_LOGIN_ACTION);

export const authLogout = createAction(LOGOUT_ACTION);
