import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature([AuthEffects]),
  ]
})
export class AuthModule { }
