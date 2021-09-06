import { Component, OnInit } from '@angular/core';
import { IBudget, IBudgetItem } from '../budget.model';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-form-budget',
  templateUrl: './form-budget.component.html',
  styleUrls: [
    './form-budget.component.scss',
    '../main-budget/main-budget.component.scss',
  ],
})
export class FormBudgetComponent implements OnInit {
  description: string = '';
  valueBudget: string = '';
  typeBudget: string = '';
  budget: IBudget = {
    total: 0,
    expenseBudget: { value: 0, percentage: 0 },
    incomeBudget: { value: 0, percentage: 0 },
  };

  constructor(private _budget: BudgetService) {}

  ngOnInit(): void {
    this._budget.mainBudget.subscribe((budget) => {
      this.budget = budget;
    });
  }

  saveItemBudget() {
    let budget: IBudgetItem = {} as IBudgetItem;
    budget.description = this.description;
    budget.value = +this.valueBudget;
    budget.percentage = 0;

    if (this.typeBudget === 'ingresos') {
      this._budget.addItemListIncome(budget);
    } else {
      this._budget.addItemListExpense(budget);
    }
  }
}
