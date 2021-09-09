import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'calculator',
    loadChildren: () =>
      import('./components/calculator/calculator.module').then(
        (m) => m.CalculatorModule
      ),
  },
  {
    path: 'budget',
    loadChildren: () =>
      import('./components/budget/budget.module').then((m) => m.BudgetModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '/calculator' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
