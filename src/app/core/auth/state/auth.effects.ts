import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createEffects } from "@ngrx/effects/src/effects_module";
import { Store } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { AuthService } from "../services/auth.service";
import { loginStrar, loginSuccess } from "./auth.actions";


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  $login = createEffect(() => {
      return this.actions$.pipe(
          ofType(loginStrar),
          exhaustMap((action) => {
            return  this._authService.ingreso(action.email, action.password).pipe(
                map((data:any)=>{
                    console.log(data)
                    return loginSuccess({ user:data, redireccion : false });
                })
            )
          })
          )
  })

}