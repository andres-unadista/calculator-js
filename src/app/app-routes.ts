import { Routes } from '@angular/router';

export const routes: Routes = [
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
    loadComponent: () =>
      import('./components/enterprise/main/main.component').then(
        (m) => m.MainComponent
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: '/calculator' },
];
