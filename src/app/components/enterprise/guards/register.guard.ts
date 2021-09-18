import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConfigService } from '../services/config.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterGuard implements CanActivate {
  constructor(private _config: ConfigService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> { 
    return this._config.getConfiguration().pipe(
      map((config) => {
        if (config?.allowRegister) {
          return true;
        }
        this.router.navigateByUrl('/enterprise/login');
        return false;
      })
    );
  }
}
