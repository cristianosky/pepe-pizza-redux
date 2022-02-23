import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { perfil, User } from 'src/app/core/auth/model/auth.model';
import { authLogout } from 'src/app/core/auth/state/auth.actions';
import {
  getUser,
  isAuthenticated,
} from 'src/app/core/auth/state/auth.selectors';
import { Categoria } from 'src/app/core/categoria/model/categoria.model';
import { loadCategoria } from 'src/app/core/categoria/store/categoria.actions';
import { getCategorias } from 'src/app/core/categoria/store/categoria.selectors';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from '../state/headers.actions';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
})
export class ContenidoComponent implements OnInit {
  isAuth!: Observable<boolean>;
  User!: Observable<any>;
  Categoria$!: Observable<Categoria[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isAuth = this.store.select(isAuthenticated);
    this.User = this.store.select(getUser);
    this.Categoria$ = this.store.select(getCategorias);
    this.store.dispatch(loadCategoria());
  }

  salir() {
    this.store.dispatch(setLoadingSpinner({ state: true }));
    this.store.dispatch(authLogout());
  }

  console() {
    console.log(this.Categoria$);
  }
}
