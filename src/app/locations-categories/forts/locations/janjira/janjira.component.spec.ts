import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanjiraComponent } from './janjira.component';

describe('JanjiraComponent', () => {
  let component: JanjiraComponent;
  let fixture: ComponentFixture<JanjiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanjiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JanjiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
