import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanpatipuleComponent } from './ganpatipule.component';

describe('GanpatipuleComponent', () => {
  let component: GanpatipuleComponent;
  let fixture: ComponentFixture<GanpatipuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanpatipuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanpatipuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
