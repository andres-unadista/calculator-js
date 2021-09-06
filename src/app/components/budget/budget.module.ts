import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { MainBudgetComponent } from './main-budget/main-budget.component';
import { IncomeBudgetComponent } from './income-budget/income-budget.component';
import { ExpenseBudgetComponent } from './expense-budget/expense-budget.component';
import { FormBudgetComponent } from './form-budget/form-budget.component';
import { BudgetService } from './budget.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainBudgetComponent,
    IncomeBudgetComponent,
    ExpenseBudgetComponent,
    FormBudgetComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    SharedModule
  ],
  providers: [
    BudgetService
  ]
})
export class BudgetModule { }
