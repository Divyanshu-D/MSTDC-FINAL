import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhimashankarComponent } from './bhimashankar.component';

describe('BhimashankarComponent', () => {
  let component: BhimashankarComponent;
  let fixture: ComponentFixture<BhimashankarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhimashankarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhimashankarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
