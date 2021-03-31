import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanjayGandhiWildlifeSanctuaryComponent } from './sanjay-gandhi-wildlife-sanctuary.component';

describe('SanjayGandhiWildlifeSanctuaryComponent', () => {
  let component: SanjayGandhiWildlifeSanctuaryComponent;
  let fixture: ComponentFixture<SanjayGandhiWildlifeSanctuaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanjayGandhiWildlifeSanctuaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanjayGandhiWildlifeSanctuaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
