import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarishchandragadComponent } from './harishchandragad.component';

describe('HarishchandragadComponent', () => {
  let component: HarishchandragadComponent;
  let fixture: ComponentFixture<HarishchandragadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarishchandragadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarishchandragadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
