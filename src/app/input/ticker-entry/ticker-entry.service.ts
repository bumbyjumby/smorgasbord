import { Injectable, EventEmitter } from '@angular/core';
import { ITickerBook } from '../../interfaces/iexchange';

@Injectable()
export class TickerEntryService {

  private bookChanged = new EventEmitter<string>();
  constructor() { }
  setBook(book: string) {
    this.bookChanged.emit(book);
  }
  onBookChanged(): EventEmitter<string> {
    return this.bookChanged;
  }
}
