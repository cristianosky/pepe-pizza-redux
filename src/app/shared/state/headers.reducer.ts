import { createReducer, on } from '@ngrx/store';
import { setErrorMensaje, setLoadingSpinner } from './headers.actions';
import { initialState } from './headers.state';

const _HeaderReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      ShowLoading: action.state,
    };
  }),
  on(setErrorMensaje, (state, action) => {
    return {
      ...state,
      errorMesajeError: action.mensaje,
    };
  })
);

export function HeadersReducer(state: any, action: any) {
  return _HeaderReducer(state, action);
}
