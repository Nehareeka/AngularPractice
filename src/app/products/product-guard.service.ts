import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean{
    // + is used to convert string to interer as a js shortcut
    let id = +route.url[1].path;
    if ( isNaN(id) || id < 1 ){
      alert("Invalid product Id");// instead navugate to page not found error page
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
