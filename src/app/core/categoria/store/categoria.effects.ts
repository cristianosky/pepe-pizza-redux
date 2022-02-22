import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs';
import { setLoadingSpinner } from 'src/app/shared/state/headers.actions';
import { AppState } from 'src/app/store/app.state';
import { CategoriaService } from '../services/categoria.service';
import { loadCategoria, loadCategoriaSuccess } from './categoria.actions';

@Injectable()
export class CategoriaEffects {
  constructor(
    private actions$: Actions,
    private _categoria: CategoriaService,
    private store: Store<AppState>
  ) {}

  loadCategorias$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCategoria),
      mergeMap((action) => {
        return this._categoria.loadCategoria().pipe(
          map((categori: any) => {
            this.store.dispatch(setLoadingSpinner({ state: false }));
            return loadCategoriaSuccess({ categria: categori });
          })
        );
      })
    );
  });
}
