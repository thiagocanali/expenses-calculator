import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryExpensesComponent } from './salary-expenses.component';

describe('SalaryExpensesComponent', () => {
  let component: SalaryExpensesComponent;
  let fixture: ComponentFixture<SalaryExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
