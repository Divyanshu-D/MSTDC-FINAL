import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DapoliComponent } from './dapoli.component';

describe('DapoliComponent', () => {
  let component: DapoliComponent;
  let fixture: ComponentFixture<DapoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DapoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DapoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
