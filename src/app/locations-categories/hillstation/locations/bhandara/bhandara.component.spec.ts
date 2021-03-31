import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhandaraComponent } from './bhandara.component';

describe('BhandaraComponent', () => {
  let component: BhandaraComponent;
  let fixture: ComponentFixture<BhandaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhandaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhandaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
