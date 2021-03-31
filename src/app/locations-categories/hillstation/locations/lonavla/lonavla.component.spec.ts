import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LonavlaComponent } from './lonavla.component';

describe('LonavlaComponent', () => {
  let component: LonavlaComponent;
  let fixture: ComponentFixture<LonavlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LonavlaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LonavlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
