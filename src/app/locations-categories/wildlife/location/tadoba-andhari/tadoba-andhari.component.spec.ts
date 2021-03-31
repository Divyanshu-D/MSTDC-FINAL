import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TadobaAndhariComponent } from './tadoba-andhari.component';

describe('TadobaAndhariComponent', () => {
  let component: TadobaAndhariComponent;
  let fixture: ComponentFixture<TadobaAndhariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TadobaAndhariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TadobaAndhariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
