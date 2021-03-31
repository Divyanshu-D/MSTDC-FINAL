import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoynaWildlifeSanctuaryComponent } from './koyna-wildlife-sanctuary.component';

describe('KoynaWildlifeSanctuaryComponent', () => {
  let component: KoynaWildlifeSanctuaryComponent;
  let fixture: ComponentFixture<KoynaWildlifeSanctuaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoynaWildlifeSanctuaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoynaWildlifeSanctuaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
