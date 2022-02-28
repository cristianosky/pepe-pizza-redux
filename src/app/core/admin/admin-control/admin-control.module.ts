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
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';


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
    NzUploadModule,
    NzButtonModule,
    NzIconModule,
    MatProgressBarModule,
    EffectsModule.forFeature([ProductosEffects]),
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.fire)
    
  ],
})
export class AdminControlModule {}
