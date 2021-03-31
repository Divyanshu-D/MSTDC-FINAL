import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalsubaiComponent } from './kalsubai.component';

describe('KalsubaiComponent', () => {
  let component: KalsubaiComponent;
  let fixture: ComponentFixture<KalsubaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalsubaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalsubaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
