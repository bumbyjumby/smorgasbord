import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerEntryComponent } from './ticker-entry.component';

describe('TickerEntryComponent', () => {
  let component: TickerEntryComponent;
  let fixture: ComponentFixture<TickerEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickerEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
