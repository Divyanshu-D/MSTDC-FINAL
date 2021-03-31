import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HillstationComponent } from './hillstation.component';

describe('HillstationComponent', () => {
  let component: HillstationComponent;
  let fixture: ComponentFixture<HillstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HillstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HillstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
