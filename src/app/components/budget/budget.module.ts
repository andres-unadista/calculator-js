import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { MainBudgetComponent } from './main-budget/main-budget.component';
import { IncomeBudgetComponent } from './income-budget/income-budget.component';
import { ExpenseBudgetComponent } from './expense-budget/expense-budget.component';
import { FormBudgetComponent } from './form-budget/form-budget.component';
import { BudgetService } from './budget.service';

import { LoginComponent } from './login/login.component';

import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';

if (!firebase.apps.length) {
  firebase.initializeApp(environment.firebaseConfig);
} else {
  firebase
    .app()
    .delete()
    .then(() => {
      firebase.initializeApp(environment.firebaseConfig);
    });
}
@NgModule({
    imports: [CommonModule, BudgetRoutingModule, MainBudgetComponent,
    IncomeBudgetComponent,
    ExpenseBudgetComponent,
    FormBudgetComponent,
    LoginComponent],
    providers: [BudgetService]
})
export class BudgetModule {}
