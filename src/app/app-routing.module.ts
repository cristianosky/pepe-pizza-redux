import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) }, 
  { path: 'inicio', loadChildren: () => import('./core/inicio/inicio.module').then(m => m.InicioModule) },
  { path: '**', pathMatch:'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
