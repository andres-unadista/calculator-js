import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {
    path: 'enterprise',
    loadChildren: () =>
      import('./components/enterprise/enterprise.module').then(
        (m) => m.EnterpriseModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: '/calculator' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
