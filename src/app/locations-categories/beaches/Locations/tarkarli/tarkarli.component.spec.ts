import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarkarliComponent } from './tarkarli.component';

describe('TarkarliComponent', () => {
  let component: TarkarliComponent;
  let fixture: ComponentFixture<TarkarliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarkarliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarkarliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
