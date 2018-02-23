import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputModule } from './input/input.module';
import { ExchangeService } from './exchange/exchange.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DbService } from './db/db.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ExchangeService, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
