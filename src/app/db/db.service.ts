import { Injectable } from '@angular/core';
import { Exchange } from '../../../shared/interfaces/iexchange';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpService } from '../classes/http-service';
@Injectable()
export class DbService extends HttpService {

  baseUrl = 'http://localhost:3000/api';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  saveTickerBook(tickerBook: Exchange.ITickerBook): Observable<string> {

    return this.httpClient.post<Exchange.ITickerBook>(this.baseUrl + '/saveTicker', tickerBook).pipe(
      catchError(this.handleError)
    );
  }


}
