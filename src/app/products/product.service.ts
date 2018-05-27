import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { IProduct } from './product';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class ProductService{
    private _productUrl = './assets/api/products/products.json';

    constructor(private _http: HttpClient){}
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data)))
            , catchError(this.handleError));
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .pipe(map((products: IProduct[]) => products.find(p => p.productId === id)));
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    } 
}
