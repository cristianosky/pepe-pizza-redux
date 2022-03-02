import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogin } from './core/auth/state/auth.actions';
import { isAuthenticated } from './core/auth/state/auth.selectors';
import { getLoading } from './shared/state/headers.selectors';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pepe-redux';
  $showLoading!: Observable<boolean>;
  loguado!: Observable<boolean>;
  visible = false;
  datoscarritos: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.$showLoading = this.store.select(getLoading);
    this.store.dispatch(autoLogin());
    this.loguado = this.store.select(isAuthenticated);
  }
  open(): void {
    this.datoscarritos = [];
    this.obtenercarrito();
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  deleteproducto(id: number) {
    const datosLocalStorage: any = localStorage.getItem('carrito');
    let carrito: any[] = JSON.parse(datosLocalStorage);
    localStorage.removeItem('carrito');
    let NewCarrito = carrito.filter((x) => x.id != id);
    const newcar = JSON.stringify(NewCarrito);
    localStorage.setItem('carrito', newcar);
    this.obtenercarrito();
  }

  obtenercarrito() {
    const datosSinParse: any = localStorage.getItem('carrito');
    const datos: any[] = JSON.parse(datosSinParse);
    if (datos) {
      this.datoscarritos = datos.map((x, index) => {
        return {
          ...x,
          index: index + 1,
        };
      });
      console.log(this.datoscarritos);
    }
  }
}
