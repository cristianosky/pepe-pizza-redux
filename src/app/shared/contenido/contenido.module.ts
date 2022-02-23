import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ContenidoRoutes } from './contenido-routing.module';
import { ContenidoComponent } from './contenido.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  declarations: [ContenidoComponent],
  imports: [
    CommonModule,
    ContenidoRoutes,
    NzMenuModule,
    NzLayoutModule,
    NzBreadCrumbModule,
  ],
})
export class ContenidoModule {}
