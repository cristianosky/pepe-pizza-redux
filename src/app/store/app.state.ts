import { AuthReducer } from '../core/auth/state/auth.reducer';
import { AUTH_STATE_NAME } from '../core/auth/state/auth.selectors';
import { AuthState } from '../core/auth/state/auth.state';
import { HeadersReducer } from '../shared/state/headers.reducer';
import { HEADERS_STATE_NAME } from '../shared/state/headers.selectors';
import { SharedState } from '../shared/state/headers.state';

export interface AppState {
  [AUTH_STATE_NAME]: AuthState;
  [HEADERS_STATE_NAME]: SharedState;
}

export const appReducer = {
  [AUTH_STATE_NAME]: AuthReducer,
  [HEADERS_STATE_NAME]: HeadersReducer,
};
