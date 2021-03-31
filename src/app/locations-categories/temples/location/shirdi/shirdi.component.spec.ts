import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirdiComponent } from './shirdi.component';

describe('ShirdiComponent', () => {
  let component: ShirdiComponent;
  let fixture: ComponentFixture<ShirdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShirdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
