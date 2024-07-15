import { TestBed } from '@angular/core/testing';

import { SalaryExpensesService } from './salary-expenses.service';

describe('SalaryExpensesService', () => {
  let service: SalaryExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaryExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
