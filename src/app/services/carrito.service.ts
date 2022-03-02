import { Injectable } from '@angular/core';
import { Productos } from '../core/admin/admin-control/model/productos.model';
import { MensajesService } from './mensajes.service';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  constructor(private _alert: MensajesService) {}

  addCarrito(producto: Productos) {
    const datoscarritosSinParse: any = localStorage.getItem('carrito');
    let datosCarritos: Productos[] = JSON.parse(datoscarritosSinParse);
    if (datosCarritos) {
      let indice = datosCarritos.findIndex((x) => x.id == producto.id);
      if (indice >= 0) {
        datosCarritos[indice].cantidad =
          (datosCarritos[indice].cantidad || 0) + 1;
        datosCarritos[indice].precio =
          datosCarritos[indice].precio + producto.precio;
        // datosCarritos.push(producto);
      } else {
        datosCarritos.push({ ...producto, cantidad: 1 });
      }
    } else {
      datosCarritos = [];
      datosCarritos.push({ ...producto, cantidad: 1 });
    }
    const datosActualizar = JSON.stringify(datosCarritos);
    localStorage.setItem('carrito', datosActualizar);
    this._alert.alertaSucces('Se agrego al carrito', 2000);
  }
}
