import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { MainBudgetComponent } from './main-budget/main-budget.component';
import { IncomeBudgetComponent } from './income-budget/income-budget.component';
import { ExpenseBudgetComponent } from './expense-budget/expense-budget.component';


@NgModule({
  declarations: [
    MainBudgetComponent,
    IncomeBudgetComponent,
    ExpenseBudgetComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule
  ]
})
export class BudgetModule { }
