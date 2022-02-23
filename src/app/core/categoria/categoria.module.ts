import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria.component';
import { EffectsModule } from '@ngrx/effects';
import { CategoriaEffects } from './store/categoria.effects';


@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    EffectsModule.forFeature([CategoriaEffects]),
  ]
})
export class CategoriaModule { }
