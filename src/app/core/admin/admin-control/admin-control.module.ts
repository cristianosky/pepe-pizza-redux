import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminControlRoutingModule } from './admin-control-routing.module';
import { AdminControlComponent } from './admin-control.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductosEffects } from './store/productos.effects';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ModalProductoComponent } from './components/modal-producto/modal-producto.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AdminControlComponent, ModalProductoComponent],
  imports: [
    CommonModule,
    AdminControlRoutingModule,
    NzIconModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    EffectsModule.forFeature([ProductosEffects]),
  ],
})
export class AdminControlModule {}
