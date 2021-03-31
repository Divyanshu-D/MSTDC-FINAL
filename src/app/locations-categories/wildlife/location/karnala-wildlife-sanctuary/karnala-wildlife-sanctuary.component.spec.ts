import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarnalaWildlifeSanctuaryComponent } from './karnala-wildlife-sanctuary.component';

describe('KarnalaWildlifeSanctuaryComponent', () => {
  let component: KarnalaWildlifeSanctuaryComponent;
  let fixture: ComponentFixture<KarnalaWildlifeSanctuaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarnalaWildlifeSanctuaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarnalaWildlifeSanctuaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
