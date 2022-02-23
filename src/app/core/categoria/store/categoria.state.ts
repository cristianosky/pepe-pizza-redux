import { Categoria, Productos } from '../model/categoria.model';

export interface CategoriaState {
  categoria: Categoria[];
  productos: Productos[];
}

export const InitState: CategoriaState = {
  categoria: [],
  productos: [],
};
