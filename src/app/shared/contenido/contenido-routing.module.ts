import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './contenido.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'inicio',
    component: ContenidoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../core/inicio/inicio.module').then((m) => m.InicioModule),
      },
    ],
  },
  {
    path: 'categoria',
    component: ContenidoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../core/categoria/categoria.module').then(
            (m) => m.CategoriaModule
          ),
      },
    ],
  },
];

export const ContenidoRoutes = RouterModule.forChild(routes);
