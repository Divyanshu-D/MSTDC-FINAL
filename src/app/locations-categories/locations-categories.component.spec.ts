import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsCategoriesComponent } from './locations-categories.component';

describe('LocationsCategoriesComponent', () => {
  let component: LocationsCategoriesComponent;
  let fixture: ComponentFixture<LocationsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
