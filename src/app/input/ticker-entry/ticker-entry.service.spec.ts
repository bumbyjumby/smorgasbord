import { TestBed, inject } from '@angular/core/testing';

import { TickerEntryService } from './ticker-entry.service';

describe('TickerEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TickerEntryService]
    });
  });

  it('should be created', inject([TickerEntryService], (service: TickerEntryService) => {
    expect(service).toBeTruthy();
  }));
});
