import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoRoutes } from './contenido-routing.module';
import { ContenidoComponent } from './contenido.component';
import { EffectsModule } from '@ngrx/effects';
import { CategoriaEffects } from 'src/app/core/categoria/store/categoria.effects';

@NgModule({
  declarations: [ContenidoComponent],
  imports: [
    CommonModule,
    ContenidoRoutes,
  ],
})
export class ContenidoModule {}
