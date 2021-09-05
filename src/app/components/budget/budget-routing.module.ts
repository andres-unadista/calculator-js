import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBudgetComponent } from './main-budget/main-budget.component';

const routes: Routes = [{ path: '', component: MainBudgetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetRoutingModule {}
