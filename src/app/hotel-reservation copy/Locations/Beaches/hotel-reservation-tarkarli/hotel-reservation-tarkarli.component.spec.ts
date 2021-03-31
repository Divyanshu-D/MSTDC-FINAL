import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReservationTarkarliComponent } from './hotel-reservation-tarkarli.component';

describe('HotelReservationTarkarliComponent', () => {
  let component: HotelReservationTarkarliComponent;
  let fixture: ComponentFixture<HotelReservationTarkarliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelReservationTarkarliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelReservationTarkarliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
