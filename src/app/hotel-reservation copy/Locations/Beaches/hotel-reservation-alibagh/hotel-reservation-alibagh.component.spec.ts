import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReservationAlibaghComponent } from './hotel-reservation-alibagh.component';

describe('HotelReservationAlibaghComponent', () => {
  let component: HotelReservationAlibaghComponent;
  let fixture: ComponentFixture<HotelReservationAlibaghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelReservationAlibaghComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelReservationAlibaghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
