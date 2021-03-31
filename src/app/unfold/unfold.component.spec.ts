import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfoldComponent } from './unfold.component';

describe('UnfoldComponent', () => {
  let component: UnfoldComponent;
  let fixture: ComponentFixture<UnfoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnfoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
