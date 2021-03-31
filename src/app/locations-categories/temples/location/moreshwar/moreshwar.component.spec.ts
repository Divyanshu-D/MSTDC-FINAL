import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreshwarComponent } from './moreshwar.component';

describe('MoreshwarComponent', () => {
  let component: MoreshwarComponent;
  let fixture: ComponentFixture<MoreshwarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreshwarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreshwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
