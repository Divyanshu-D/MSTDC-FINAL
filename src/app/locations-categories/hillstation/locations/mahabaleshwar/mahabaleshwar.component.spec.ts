import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahabaleshwarComponent } from './mahabaleshwar.component';

describe('MahabaleshwarComponent', () => {
  let component: MahabaleshwarComponent;
  let fixture: ComponentFixture<MahabaleshwarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahabaleshwarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahabaleshwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
