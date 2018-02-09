import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOrdersComponent } from './public-orders.component';

describe('PublicOrdersComponent', () => {
  let component: PublicOrdersComponent;
  let fixture: ComponentFixture<PublicOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
