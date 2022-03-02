import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadersComponent } from './shared/headers/headers.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/auth/state/auth.effects';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { CargandoComponent } from './shared/cargando/cargando.component';
import { ContenidoModule } from './shared/contenido/contenido.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CategoriaEffects } from './core/categoria/store/categoria.effects';
import { GlobalInterceptor } from './shared/interceptor';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { FirestoreModule } from '@angular/fire/firestore';
import { ProductosEffects } from './core/admin/admin-control/store/productos.effects';
import { MatDialogModule } from '@angular/material/dialog';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [AppComponent, HeadersComponent, CargandoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ContenidoModule,
    MatSnackBarModule,
    NzIconModule,
    NzTableModule,
    FormsModule,
    NzButtonModule,
    MatDialogModule,
    NzDrawerModule,
    EffectsModule.forRoot([AuthEffects, CategoriaEffects, ProductosEffects]),
    StoreModule.forRoot(appReducer),
    provideFirebaseApp(() =>
      initializeApp({ apiKey: environment.fire.apiKey })
    ),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 25,
    }),
    FirestoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
