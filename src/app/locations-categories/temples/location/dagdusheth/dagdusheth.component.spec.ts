import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DagdushethComponent } from './dagdusheth.component';

describe('DagdushethComponent', () => {
  let component: DagdushethComponent;
  let fixture: ComponentFixture<DagdushethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DagdushethComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DagdushethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
