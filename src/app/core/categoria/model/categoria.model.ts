export interface Categoria {
  id: number;
  nombre: string;
}

export interface Productos {
  categoria: number;
  descripcion: string;
  id: number;
  imagen: string;
  nombre: string;
  precio: string;
}
