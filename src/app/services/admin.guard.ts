import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { User } from '../core/auth/model/auth.model';
import { getUser, isAdmin } from '../core/auth/state/auth.selectors';
import { AppState } from '../store/app.state';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.store.select(isAdmin).pipe(
      map((isAdmin) => {
        if (!isAdmin.isAdmin) {
          return this.router.createUrlTree(['/inicio']);
        }
        return true;
      })
    );

    return true;
  }
}
