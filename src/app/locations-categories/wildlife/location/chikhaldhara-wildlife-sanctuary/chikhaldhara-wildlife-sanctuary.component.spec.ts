import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChikhaldharaWildlifeSanctuaryComponent } from './chikhaldhara-wildlife-sanctuary.component';

describe('ChikhaldharaWildlifeSanctuaryComponent', () => {
  let component: ChikhaldharaWildlifeSanctuaryComponent;
  let fixture: ComponentFixture<ChikhaldharaWildlifeSanctuaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChikhaldharaWildlifeSanctuaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChikhaldharaWildlifeSanctuaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
