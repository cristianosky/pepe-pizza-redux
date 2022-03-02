import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokena: any = localStorage.getItem('token');
    const token = JSON.parse(tokena);
    if (token) {
      const headers = new HttpHeaders({
        Authorization: token,
      });
      const reqClone = req.clone({
        headers: headers,
      });
      return next.handle(reqClone);
    }
    return next.handle(req);
  }
}
