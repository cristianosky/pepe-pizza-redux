import { createReducer, on } from '@ngrx/store';
import { loginSuccess, registerSuccess } from './auth.actions';
import { initialState } from './auth.state';

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(registerSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  })
);

export function AuthReducer(state: any, action: any) {
  return _authReducer(state, action);
}
