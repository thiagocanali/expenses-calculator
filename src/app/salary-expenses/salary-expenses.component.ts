import { Component } from '@angular/core';
import { SalaryExpensesService } from '../salary-expenses.service';

interface Expense {
  title: string;
  value: number;
}

@Component({
  selector: 'app-salary-expenses',
  templateUrl: './salary-expenses.component.html',
  styleUrls: ['./salary-expenses.component.css']
})
export class SalaryExpensesComponent {
  month: string = '';
  salary: number | null = 0;
  expenseTitle: string = '';
  expenseValue: number | null = 0;
  expenses: Expense[] = [];

  constructor(private salaryExpensesService: SalaryExpensesService) {}

  addData(): void {
    if (this.salary !== null && this.month) {
      const totalExpenses = this.calculateTotalExpenses();
      const remaining = this.calculateRemainingSalary(totalExpenses);
      this.salaryExpensesService.addMonthData(this.month, this.salary, this.expenses, remaining);
      this.resetForm();
    }
  }

  addExpense(): void {
    if (this.isExpenseValid()) {
      this.expenses.push({ title: this.expenseTitle, value: this.expenseValue! });
      this.resetExpenseFields();
    }
  }

  resetForm(): void {
    this.month = '';
    this.salary = 0;
    this.resetExpenseFields();
    this.expenses = [];
  }

  resetExpenseFields(): void {
    this.expenseTitle = '';
    this.expenseValue = 0;
  }

  clearField(field: 'salary' | 'expenseValue'): void {
    if (this[field] === 0) {
      this[field] = null;
    }
  }

  restoreField(field: 'salary' | 'expenseValue'): void {
    if (this[field] === null) {
      this[field] = 0;
    }
  }

  private calculateTotalExpenses(): number {
    return this.expenses.reduce((acc, expense) => acc + expense.value, 0);
  }

  private calculateRemainingSalary(totalExpenses: number): number {
    return (this.salary || 0) - totalExpenses;
  }

  private isExpenseValid(): boolean {
    return this.expenseTitle !== '' && this.expenseValue !== null;
  }

  get data() {
    return this.salaryExpensesService.getMonthData();
  }
}
