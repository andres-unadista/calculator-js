import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { IBudget } from '../budget.model';
import { BudgetService } from '../budget.service';
import { LoginService } from '../login/login.service';
import { ExpenseBudgetComponent } from '../expense-budget/expense-budget.component';
import { IncomeBudgetComponent } from '../income-budget/income-budget.component';
import { NgIf, PercentPipe, CurrencyPipe } from '@angular/common';
import { BtnRedirectComponent } from '../../shared/btn-redirect/btn-redirect.component';
import { FormBudgetComponent } from '../form-budget/form-budget.component';

@Component({
    selector: 'app-main-budget',
    templateUrl: './main-budget.component.html',
    styleUrls: ['./main-budget.component.scss'],
    standalone: true,
    imports: [FormBudgetComponent, BtnRedirectComponent, NgIf, IncomeBudgetComponent, ExpenseBudgetComponent, PercentPipe, CurrencyPipe]
})
export class MainBudgetComponent implements OnInit {
  budget: IBudget = {
    expenseBudget: { percentage: 0, value: 0 },
    incomeBudget: { percentage: 0, value: 0 },
    total: 0,
  };

  constructor(
    private _budget: BudgetService,
    private _login: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.isAuthenticated()) {
      this._budget.mainBudget.subscribe(
        (budget: IBudget) => (this.budget = budget)
      );
    }
  }

  percentageMainBudget(type: boolean) {
    let percent = this._budget.percentageMainBudget(type);
    if (isNaN(percent)) {
      return 0;
    }
    return percent;
  }

  isAuthenticated() {
    return this._login.isAuthenticated();
  }

  logout() {
    this._login.logout();
  }
}
