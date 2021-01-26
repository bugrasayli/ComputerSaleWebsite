import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedUserComponent } from './proceed-user.component';

describe('ProceedUserComponent', () => {
  let component: ProceedUserComponent;
  let fixture: ComponentFixture<ProceedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
