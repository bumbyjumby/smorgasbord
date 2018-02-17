import { Component, OnInit, Input } from '@angular/core';
import { ExchangeService } from '../../exchange/exchange.service';
import { Exchange } from '../../../../shared/interfaces/iexchange';
import { TickerEntryService } from './ticker-entry.service';

@Component({
  selector: 'trader-ticker-entry',
  templateUrl: './ticker-entry.component.html',
  styleUrls: ['./ticker-entry.component.scss']
})
export class TickerEntryComponent implements OnInit {

  selectedBook: Exchange.IBook;
  books: Exchange.IBook[] = [{ book: 'ltc_cad', description: 'Litecoin (CAD)' }, { book: 'eth_cad', description: 'Ethereum (CAD)' }];
  currentTicker: Exchange.ITicker;
  inProgress = false;
  constructor(private exchangeService: ExchangeService, private tickerEntryService: TickerEntryService) { }

  ngOnInit() {
  }
  onSelect(book) {
    this.selectedBook = book;
    this.inProgress = true;
    this.exchangeService.getTicker(this.selectedBook.book).subscribe(
      data => {
        this.currentTicker = data;
        this.inProgress = false;
        // post ticker to rest
        const tickerBook = <Exchange.ITickerBook>data;
        tickerBook.book = this.selectedBook;
        this.tickerEntryService.storeTicker(tickerBook);

        this.tickerEntryService.setBook(this.selectedBook);
      },
      error => { this.inProgress = false; console.log(error); });
  }

}
