import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.apiUrl
  constructor(private http:HttpClient) { }

  ingreso(email:string, password:string){
    return this.http.post(`${this.url}/ingresar`, {email, password})
  }
}
