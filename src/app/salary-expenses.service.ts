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
  private data: MonthData[] = [];

  addMonthData(month: string, salary: number, expenses: Expense[], remaining: number) {
    this.data.push({ month, salary, expenses, remaining });
  }

  getMonthData() {
    return this.data;
  }
}
