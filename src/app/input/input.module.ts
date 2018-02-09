import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicOrdersComponent } from './public-orders/public-orders.component';
import { TickerEntryComponent } from './ticker-entry/ticker-entry.component';
import { FormsModule } from '@angular/forms';
import { TickerEntryService } from './ticker-entry/ticker-entry.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [PublicOrdersComponent, TickerEntryComponent],
  exports: [TickerEntryComponent, PublicOrdersComponent],
  providers: [TickerEntryService]
})
export class InputModule { }
