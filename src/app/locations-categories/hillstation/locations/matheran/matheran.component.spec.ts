import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatheranComponent } from './matheran.component';

describe('MatheranComponent', () => {
  let component: MatheranComponent;
  let fixture: ComponentFixture<MatheranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatheranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatheranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
