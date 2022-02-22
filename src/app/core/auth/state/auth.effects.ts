import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { MensajesService } from 'src/app/services/mensajes.service';
import { setLoadingSpinner } from 'src/app/shared/state/headers.actions';
import { AppState } from 'src/app/store/app.state';
import { AuthService } from '../services/auth.service';
import {
  authLogout,
  autoLogin,
  loginStrar,
  loginSuccess,
  registerStrar,
  registerSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
    private _alert: MensajesService
  ) {}

  $login = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStrar),
      exhaustMap((action) => {
        return this._authService.ingreso(action.email, action.password).pipe(
          map((data: any) => {
            if (data.status) {
              this.store.dispatch(setLoadingSpinner({ state: false }));
              this._authService.setUsuario(data.datos);
              return loginSuccess({ user: data.datos, redireccion: true });
            } else {
              this.store.dispatch(setLoadingSpinner({ state: false }));
              this._alert.alertaError(data.mensaje, 2000);
              return loginSuccess({ user: data, redireccion: false });
            }
          }),
          catchError((errRsp) => {
            this.store.dispatch(setLoadingSpinner({ state: false }));
            this._alert.alertaError('Error desconocido', 2000);
            return of();
          })
        );
      })
    );
  });

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerStrar),
      exhaustMap((action) => {
        return this._authService
          .registar(action.name, action.email, action.password)
          .pipe(
            map((data: any) => {
              if (data.status) {
                this.store.dispatch(setLoadingSpinner({ state: false }));
                this._authService.setUsuario(data.datos);
                return registerSuccess({ user: data.datos, redireccion: true });
              } else {
                this.store.dispatch(setLoadingSpinner({ state: false }));
                this._alert.alertaError(data.mensaje, 2000);
                return registerSuccess({ user: data, redireccion: false });
              }
            }),
            catchError((errRsp) => {
              this.store.dispatch(setLoadingSpinner({ state: false }));
              this._alert.alertaError('Error desconocido', 2000);
              return of();
            })
          );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[loginSuccess, registerSuccess]),
        tap((action) => {
          if (action.redireccion) {
            this.router.navigate(['/inicio']);
          }
        })
      );
    },
    { dispatch: false }
  );

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogin),
      mergeMap((action) => {
        const user: any = this._authService.getUserLocalStorage();
        return of(loginSuccess({ user: user, redireccion: false }));
      })
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authLogout),
        map((action) => {
          this.store.dispatch(setLoadingSpinner({ state: false }));
          this._authService.logout();
          this.router.navigate(['auth']);
        })
      );
    },
    { dispatch: false }
  );
}
