import { Productos } from '../model/productos.model';

export interface ProductosState {
  productos: Productos[];
}

export const InitState: ProductosState = {
  productos: [],
};
