import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaigadComponent } from './raigad.component';

describe('RaigadComponent', () => {
  let component: RaigadComponent;
  let fixture: ComponentFixture<RaigadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaigadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaigadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
