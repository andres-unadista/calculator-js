import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { IBudget } from '../budget.model';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-main-budget',
  templateUrl: './main-budget.component.html',
  styleUrls: ['./main-budget.component.scss'],
})
export class MainBudgetComponent implements OnInit {
  budget: IBudget = {
    expenseBudget: { percentage: 0, value: 0 },
    incomeBudget: { percentage: 0, value: 0 },
    total: 0,
  };

  constructor(private _budget: BudgetService) {}

  ngOnInit(): void {
    this._budget.mainBudget.subscribe(
      (budget: IBudget) => (this.budget = budget)
    );
  }

  percentageMainBudget(type:boolean){
    let percent = this._budget.percentageMainBudget(type);
    if (isNaN(percent)) {
      return 0;
    }
    return percent;
  }
}
