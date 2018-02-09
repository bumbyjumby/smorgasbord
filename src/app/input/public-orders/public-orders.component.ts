import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../../exchange/exchange.service';
import { TickerEntryService } from '../ticker-entry/ticker-entry.service';
import { ITickerBook, IOpenOrders } from '../../interfaces/iexchange';

@Component({
  selector: 'trader-public-orders',
  templateUrl: './public-orders.component.html',
  styleUrls: ['./public-orders.component.scss']
})
export class PublicOrdersComponent implements OnInit {

  openOrders: IOpenOrders;
  constructor(private tickerEntryService: TickerEntryService, private exchangeService: ExchangeService) {
    this.tickerEntryService.onBookChanged().subscribe(book => this.onBookChanged(book));
  }

  ngOnInit() {
  }
  onBookChanged(book: string) {
    this.exchangeService.getOpenOrders(book).subscribe(x => {
      this.openOrders = x;
    });
  }
}
