import { Injectable, EventEmitter } from '@angular/core';
import { ITickerBook } from '../../interfaces/iexchange';
import { IBook } from '../../interfaces/app';

@Injectable()
export class TickerEntryService {

  private bookChanged = new EventEmitter<IBook>();
  constructor() { }
  setBook(book: IBook) {
    this.bookChanged.emit(book);
  }
  onBookChanged(): EventEmitter<IBook> {
    return this.bookChanged;
  }
}
