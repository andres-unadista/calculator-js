import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/guards/login.guard';
import { LoginComponent } from './login/login.component';
import { MainBudgetComponent } from './main-budget/main-budget.component';

const routes: Routes = [
  { path: '', component: MainBudgetComponent, canActivate: [LoginGuard], children: []},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetRoutingModule {}
