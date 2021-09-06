import { Component, OnInit } from '@angular/core';
import { IBudgetItem } from '../budget.model';

import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-expense-budget',
  templateUrl: './expense-budget.component.html',
  styleUrls: [
    './expense-budget.component.scss',
    '../main-budget/main-budget.component.scss',
  ],
})
export class ExpenseBudgetComponent implements OnInit {
  listExpense: IBudgetItem[] = [];

  constructor(private _budget: BudgetService) {}

  ngOnInit(): void {
    this._budget.eventListExpense.subscribe((listExpense) => {
      console.log('listExpense');
      console.log(listExpense);
      this.listExpense = listExpense;
    });
  }

  percentageBudget(value:number){
    return this._budget.percentageBudget(value, false);
  }
}
