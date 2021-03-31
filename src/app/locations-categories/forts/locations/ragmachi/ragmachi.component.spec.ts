import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RagmachiComponent } from './ragmachi.component';

describe('RagmachiComponent', () => {
  let component: RagmachiComponent;
  let fixture: ComponentFixture<RagmachiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RagmachiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RagmachiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
