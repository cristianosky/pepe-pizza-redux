import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/services/admin.guard';
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
    path: 'categoria/:id',
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
  {
    path: 'productos',
   /* canActivate: [AdminGuard],*/
    component: ContenidoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../core/admin/admin-control/admin-control.module').then(
            (m) => m.AdminControlModule
          ),
      },
    ],
  },
];

export const ContenidoRoutes = RouterModule.forChild(routes);
