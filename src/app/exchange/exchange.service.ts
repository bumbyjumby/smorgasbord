import { Injectable } from '@angular/core';
import { Exchange } from '../../../shared/interfaces/iexchange';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
@Injectable()
export class ExchangeService implements Exchange.IExchange {

  constructor(private http: HttpClient) { }
  getOpenOrders(ticker: string): Observable<Exchange.IOpenOrders> {
    const options = ticker ?
      { params: new HttpParams().set('book', ticker) } : {};

    return this.http.get<Exchange.IOpenOrders>('https://api.quadrigacx.com/v2/order_book', options).pipe(
      catchError(this.handleError)
    );
  }
  getTicker(ticker: string): Observable<Exchange.ITicker> {
     const options = ticker ?
      { params: new HttpParams().set('book', ticker) } : {};

    return this.http.get<Exchange.ITicker>('https://api.quadrigacx.com/v2/ticker', options).pipe(
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
}
