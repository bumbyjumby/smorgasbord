import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputModule } from './input/input.module';
import { ExchangeService } from './exchange/exchange.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  providers: [ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
