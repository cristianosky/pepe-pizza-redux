import { Categoria } from '../model/categoria.model';

export interface CategoriaState {
  categoria: Categoria[];
}

export const InitState: CategoriaState = {
  categoria: [],
};
