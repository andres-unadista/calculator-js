import { Component, Input, OnInit } from '@angular/core';
import { IBudget, IBudgetItem } from '../budget.model';
import { BudgetService } from '../budget.service';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-form-budget',
    templateUrl: './form-budget.component.html',
    styleUrls: [
        './form-budget.component.scss',
        '../main-budget/main-budget.component.scss',
    ],
    standalone: true,
    imports: [FormsModule, NgClass]
})
export class FormBudgetComponent implements OnInit {
  @Input() auth:boolean = false;
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
    console.log(this.auth);
  }

  saveItemBudget() {
    console.log('save');
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

  borderTypeBudget(): string {
    switch (this.typeBudget) {
      case 'ingresos':
        return 'border border-success';
        break;
      case 'egresos':
        return 'border border-danger';
        break;

      default:
        return '';
        break;
    }
  }
}
