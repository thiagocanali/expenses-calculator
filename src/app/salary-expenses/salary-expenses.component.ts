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

  addData() {
    const totalExpenses = this.expenses.reduce((acc, expense) => acc + expense.value, 0);
    const remaining = (this.salary || 0) - totalExpenses;
    this.salaryExpensesService.addMonthData(this.month, this.salary || 0, this.expenses, remaining);
    this.resetForm();
  }

  addExpense() {
    if (this.expenseTitle && this.expenseValue !== null) {
      this.expenses.push({ title: this.expenseTitle, value: this.expenseValue });
      this.expenseTitle = '';
      this.expenseValue = 0;
    }
  }

  resetForm() {
    this.month = '';
    this.salary = 0;
    this.expenseTitle = '';
    this.expenseValue = 0;
    this.expenses = [];
  }

  clearField(field: 'salary' | 'expenseValue') {
    if (field === 'salary' && this.salary === 0) {
      this.salary = null;
    } else if (field === 'expenseValue' && this.expenseValue === 0) {
      this.expenseValue = null;
    }
  }

  restoreField(field: 'salary' | 'expenseValue') {
    if (field === 'salary' && this.salary === null) {
      this.salary = 0;
    } else if (field === 'expenseValue' && this.expenseValue === null) {
      this.expenseValue = 0;
    }
  }

  get data() {
    return this.salaryExpensesService.getMonthData();
  }
}
