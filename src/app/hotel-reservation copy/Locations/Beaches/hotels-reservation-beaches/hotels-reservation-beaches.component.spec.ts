import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsReservationBeachesComponent } from './hotels-reservation-beaches.component';

describe('HotelsReservationBeachesComponent', () => {
  let component: HotelsReservationBeachesComponent;
  let fixture: ComponentFixture<HotelsReservationBeachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsReservationBeachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsReservationBeachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
