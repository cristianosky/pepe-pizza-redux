import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  ingreso(correo: string, password: string) {
    return this.http.post(`${this.url}/ingresar`, { correo, password });
  }

  registar(name: string, email: string, password: string) {
    return this.http.post(`${this.url}/crearusurio`, { name, email, password });
  }

  setUsuario(user: User) {
    localStorage.setItem('token', JSON.stringify(user.token));
    localStorage.setItem('dataUser', JSON.stringify(user.perfil));
    return user;
  }

  getUserLocalStorage() {
    const dataString = localStorage.getItem('dataUser');
    const token: any = localStorage.getItem('token');
    if (dataString) {
      const UserData = JSON.parse(dataString);
      const user: User = {
        token: token,
        perfil: UserData,
      };

      return user;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('dataUser');
    localStorage.removeItem('token');
  }
}
