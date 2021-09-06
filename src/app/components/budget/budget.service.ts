import { EventEmitter, Injectable } from '@angular/core';
import { IBudget, IBudgetItem } from './budget.model';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  mainBudget = new EventEmitter<IBudget>();
  eventListIncome = new EventEmitter<IBudgetItem[]>();
  eventListExpense = new EventEmitter<IBudgetItem[]>();
  listIncome: IBudgetItem[] = [];
  listExpense: IBudgetItem[] = [];
  totalIncome: number = 0;
  totalExpense: number = 0;

  constructor() {}

  addItemListIncome(income: IBudgetItem) {
    this.totalIncome += +income.value;
    this.listIncome.push(income);
    this.eventListIncome.emit(this.listIncome);
    this.setBudget();
  }

  addItemListExpense(expense: IBudgetItem) {
    this.totalExpense += +expense.value;
    this.listExpense.push(expense);
    this.eventListExpense.emit(this.listExpense);
    this.setBudget();
  }

  setBudget() {
    let total = this.totalIncome - this.totalExpense;
    let budgetIncome = this.totalIncome;
    let budgetExpense = this.totalExpense;
    let budget: IBudget = {
      total,
      expenseBudget: { value: budgetExpense },
      incomeBudget: { value: budgetIncome },
    };
    this.mainBudget.emit(budget);
  }

  getBudget() {
    return this.mainBudget;
  }

  percentageBudget(value: number, typeBudget: boolean) {
    if (typeBudget) {
      return (value) / this.totalIncome;
    }
    return (value) / this.totalExpense;
  }

  percentageMainBudget(typeBudget: boolean) {
    let total = this.totalIncome + this.totalExpense;

    if (typeBudget) {
      return (this.totalIncome) / total;
    }
    return (this.totalExpense) / total;
  }
}
