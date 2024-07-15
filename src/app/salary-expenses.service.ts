import { Injectable } from '@angular/core';

interface Expense {
  title: string;
  value: number;
}

interface MonthData {
  month: string;
  salary: number;
  expenses: Expense[];
  remaining: number;
}

@Injectable({
  providedIn: 'root'
})
export class SalaryExpensesService {
  private monthData: MonthData[] = [];

  addMonthData(month: string, salary: number, expenses: Expense[], remaining: number): void {
    this.monthData.push({ month, salary, expenses, remaining });
  }

  getMonthData(): MonthData[] {
    return this.monthData;
  }
}
