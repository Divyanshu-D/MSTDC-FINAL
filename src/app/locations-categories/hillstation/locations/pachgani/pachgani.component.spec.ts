import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PachganiComponent } from './pachgani.component';

describe('PachganiComponent', () => {
  let component: PachganiComponent;
  let fixture: ComponentFixture<PachganiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PachganiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PachganiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
