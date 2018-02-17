import { Component, OnInit, Input } from '@angular/core';
import { ExchangeService } from '../../exchange/exchange.service';
import { ITickerBook } from '../../interfaces/iexchange';
import { TickerEntryService } from './ticker-entry.service';
import { IBook } from '../../interfaces/app';
import { Book } from '../../classes/book';

@Component({
  selector: 'trader-ticker-entry',
  templateUrl: './ticker-entry.component.html',
  styleUrls: ['./ticker-entry.component.scss']
})
export class TickerEntryComponent implements OnInit {

  selectedBook: Book;
  books: Book[] = [{ book: 'ltc_cad', description: 'Litecoin (CAD)' }, { book: 'eth_cad', description: 'Ethereum (CAD)' }];
  currentTicker: ITickerBook;
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
        this.tickerEntryService.setBook(this.selectedBook);
      },
      error => { this.inProgress = false; console.log(error); });
  }

}
