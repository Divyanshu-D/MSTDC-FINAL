import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarihareshwarComponent } from './harihareshwar.component';

describe('HarihareshwarComponent', () => {
  let component: HarihareshwarComponent;
  let fixture: ComponentFixture<HarihareshwarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarihareshwarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarihareshwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
