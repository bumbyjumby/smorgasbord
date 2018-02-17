import { Injectable, EventEmitter } from '@angular/core';
import { Exchange } from '../../../../shared/interfaces/iexchange';

@Injectable()
export class TickerEntryService {

  private bookChanged = new EventEmitter<Exchange.IBook>();
  constructor() { }
  setBook(book: Exchange.IBook) {
    this.bookChanged.emit(book);
  }
  onBookChanged(): EventEmitter<Exchange.IBook> {
    return this.bookChanged;
  }
  storeTicker(tickerBook: Exchange.ITickerBook) {
    
  }
}
