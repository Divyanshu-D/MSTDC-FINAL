import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlibaghComponent } from './alibagh.component';

describe('AlibaghComponent', () => {
  let component: AlibaghComponent;
  let fixture: ComponentFixture<AlibaghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlibaghComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlibaghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
