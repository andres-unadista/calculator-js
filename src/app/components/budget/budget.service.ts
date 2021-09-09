import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from 'src/app/data-service.service';
import { IBudget, IBudgetItem } from './budget.model';
import { LoginService } from './login/login.service';

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

  constructor(private _dataService: DataService, private _login:LoginService) {
    if (this._login.isAuthenticated()) {
      this._dataService.getAllDataService().subscribe((resp: any) => {
        if (resp) {
          let budget: IBudget = resp.budget;
          let incomes: IBudgetItem[] = resp.incomes ? resp.incomes : [];
          let expenses: IBudgetItem[] = resp.expenses ? resp.expenses : [];
          this.listIncome = incomes;
          this.listExpense = expenses;
          this.totalExpense = budget.expenseBudget.value;
          this.totalIncome = budget.incomeBudget.value;
          this.mainBudget.emit(budget);
          this.eventListIncome.emit(incomes);
          this.eventListExpense.emit(expenses);
        }
      });
    }
  }

  addItemListIncome(income: IBudgetItem) {
    this.totalIncome += +income.value;
    income.percentage = +income.value / this.totalIncome;
    this.listIncome.push(income);
    this.eventListIncome.emit(this.listIncome);
    this.setBudget();
  }

  addItemListExpense(expense: IBudgetItem) {
    this.totalExpense += +expense.value;
    expense.percentage = +expense.value / this.totalIncome;
    this.listExpense.push(expense);
    this.eventListExpense.emit(this.listExpense);
    this.setBudget();
  }

  async setBudget() {
    let total = this.totalIncome - this.totalExpense;
    console.log('total');
    console.log(total);
    let budgetIncome = this.totalIncome;
    let budgetExpense = this.totalExpense;
    let budget: IBudget = {
      total,
      expenseBudget: { value: budgetExpense },
      incomeBudget: { value: budgetIncome },
    };
    await this.saveFirebaseData(budget);
    this.mainBudget.emit(budget);
  }

  saveFirebaseData(budget: IBudget) {
    this._dataService
      .saveDataService(budget, this.listIncome, this.listExpense)
      .subscribe((resp) => {
        console.log('save');
        console.log(resp)
      });
  }

  getBudget() {
    return this.mainBudget;
  }

  percentageBudget(value: number, typeBudget: boolean) {
    if (typeBudget) {
      return value / this.totalIncome;
    }
    return value / this.totalExpense;
  }

  percentageMainBudget(typeBudget: boolean) {
    let total = this.totalIncome + this.totalExpense;

    if (typeBudget) {
      return this.totalIncome / total;
    }
    return this.totalExpense / total;
  }

  deleteIncome(index: number) {
    let income: IBudgetItem = this.listIncome[index];
    this.totalIncome -= +income.value;
    this.listIncome.splice(index, 1);
    this.eventListIncome.emit(this.listIncome);
    this.setBudget();
  }

  deleteExpense(index: number) {
    let expense: IBudgetItem = this.listExpense[index];
    this.totalExpense -= +expense.value;
    this.listExpense.splice(index, 1);
    this.eventListExpense.emit(this.listExpense);
    this.setBudget();
  }
}
