import { Component, OnInit } from '@angular/core';

import { IBudgetItem } from '../budget.model';

import { BudgetService } from '../budget.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-income-budget',
  templateUrl: './income-budget.component.html',
  styleUrls: [
    './income-budget.component.scss',
    '../main-budget/main-budget.component.scss',
  ],
})
export class IncomeBudgetComponent implements OnInit {
  listIncome: IBudgetItem[] = [];

  constructor(private _budget: BudgetService) {}

  ngOnInit(): void {
    this._budget.eventListIncome.subscribe((listIncome) => {
      console.log('listIncome');
      console.log(listIncome);
      this.listIncome = listIncome;
    });
  }

  percentageBudget(value: number) {
    return this._budget.percentageBudget(value, true);
  }

  delete(index: number) {
    console.log(index);
    this._budget.deleteIncome(index);
  }
}
