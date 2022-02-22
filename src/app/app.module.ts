import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadersComponent } from './shared/headers/headers.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/auth/state/auth.effects';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 25,
    }),
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(appReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
