import { Injectable, EventEmitter } from '@angular/core';
import { Exchange } from '../../../../shared/interfaces/iexchange';
import { DbService } from '../../db/db.service';
@Injectable()
export class TickerEntryService {

  private bookChanged = new EventEmitter<Exchange.IBook>();
  constructor(private dBService: DbService) { }
  setBook(book: Exchange.IBook) {
    this.bookChanged.emit(book);
  }
  onBookChanged(): EventEmitter<Exchange.IBook> {
    return this.bookChanged;
  }
  storeTicker(tickerBook: Exchange.ITickerBook) {
    this.dBService.saveTickerBook(tickerBook).subscribe( result => {
      console.dir(result);
    })
  }
}
