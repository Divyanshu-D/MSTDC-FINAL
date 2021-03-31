import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReservationHariharshwarComponent } from './hotel-reservation-hariharshwar.component';

describe('HotelReservationHariharshwarComponent', () => {
  let component: HotelReservationHariharshwarComponent;
  let fixture: ComponentFixture<HotelReservationHariharshwarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelReservationHariharshwarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelReservationHariharshwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
