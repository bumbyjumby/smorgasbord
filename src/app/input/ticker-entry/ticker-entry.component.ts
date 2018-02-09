import { Component, OnInit, Input } from '@angular/core';
import { ExchangeService } from '../../exchange/exchange.service';
import { ITickerBook } from '../../interfaces/iexchange';
import { TickerEntryService } from './ticker-entry.service';

@Component({
  selector: 'trader-ticker-entry',
  templateUrl: './ticker-entry.component.html',
  styleUrls: ['./ticker-entry.component.scss']
})
export class TickerEntryComponent implements OnInit {

  selectedBook: string;
  books: string[] = ['ltc_cad', 'eth_cad'];
  currentTicker: ITickerBook;
  constructor(private exchangeService: ExchangeService, private tickerEntryService: TickerEntryService) { }

  ngOnInit() {
  }
  onSelect(book) {
    this.selectedBook = book;
    this.exchangeService.getTicker(this.selectedBook).subscribe(
      data => {
        this.currentTicker = data;
        this.tickerEntryService.setBook(this.selectedBook);
      },
      error => console.log(error));
  }

}
