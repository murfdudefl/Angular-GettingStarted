import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { isNumber } from 'util';

@Injectable()

export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.paramMap.get('id');
    if (isNaN(id) || id <= 0) {
      alert('Invalid product ID: ' + id);
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }

}
