import { Categoria } from 'src/app/core/categoria/model/categoria.model';

export interface SharedState {
  ShowLoading: boolean;
  errorMesajeError: string;
  Categorias: Categoria[];
}

export const initialState: SharedState = {
  ShowLoading: false,
  errorMesajeError: '',
  Categorias: [],
};
