import { productosReducer } from '../core/admin/admin-control/store/productos.reducer';
import { PRODUCTOS_STATE_NAME } from '../core/admin/admin-control/store/productos.selectors';
import { ProductosState } from '../core/admin/admin-control/store/productos.state';
import { AuthReducer } from '../core/auth/state/auth.reducer';
import { AUTH_STATE_NAME } from '../core/auth/state/auth.selectors';
import { AuthState } from '../core/auth/state/auth.state';
import { categoriaReducer } from '../core/categoria/store/categoria.reducer';
import { CAT_STATE_NAME } from '../core/categoria/store/categoria.selectors';
import { CategoriaState } from '../core/categoria/store/categoria.state';
import { HeadersReducer } from '../shared/state/headers.reducer';
import { HEADERS_STATE_NAME } from '../shared/state/headers.selectors';
import { SharedState } from '../shared/state/headers.state';

export interface AppState {
  [AUTH_STATE_NAME]: AuthState;
  [HEADERS_STATE_NAME]: SharedState;
  [CAT_STATE_NAME]: CategoriaState;
  [PRODUCTOS_STATE_NAME]: ProductosState;
}

export const appReducer = {
  [AUTH_STATE_NAME]: AuthReducer,
  [HEADERS_STATE_NAME]: HeadersReducer,
  [CAT_STATE_NAME]: categoriaReducer,
  [PRODUCTOS_STATE_NAME]: productosReducer,
};
