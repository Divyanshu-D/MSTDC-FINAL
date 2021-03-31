import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MurudComponent } from './murud.component';

describe('MurudComponent', () => {
  let component: MurudComponent;
  let fixture: ComponentFixture<MurudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MurudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MurudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
