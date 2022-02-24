import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminControlRoutingModule } from './admin-control-routing.module';
import { AdminControlComponent } from './admin-control.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductosEffects } from './store/productos.effects';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [AdminControlComponent],
  imports: [
    CommonModule,
    AdminControlRoutingModule,
    NzIconModule,

    EffectsModule.forFeature([ProductosEffects]),
  ],
})
export class AdminControlModule {}
