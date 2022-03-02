import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, InicioRoutingModule, MatSidenavModule],
})
export class InicioModule {}
