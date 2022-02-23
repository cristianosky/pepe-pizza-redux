import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminControlRoutingModule } from './admin-control-routing.module';
import { AdminControlComponent } from './admin-control.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductosEffects } from './store/productos.effects';

@NgModule({
  declarations: [AdminControlComponent],
  imports: [
    CommonModule,
    AdminControlRoutingModule,
    EffectsModule.forFeature([ProductosEffects]),
  ],
})
export class AdminControlModule {}
