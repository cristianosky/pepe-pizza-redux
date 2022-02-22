import { AuthReducer } from "../core/auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../core/auth/state/auth.selectors";
import { AuthState } from "../core/auth/state/auth.state";


export interface AppState {
    [AUTH_STATE_NAME]: AuthState;
  }
  
  export const appReducer = {
    [AUTH_STATE_NAME]: AuthReducer,
  };