import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReservationDapoliComponent } from './hotel-reservation-dapoli.component';

describe('HotelReservationDapoliComponent', () => {
  let component: HotelReservationDapoliComponent;
  let fixture: ComponentFixture<HotelReservationDapoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelReservationDapoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelReservationDapoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
