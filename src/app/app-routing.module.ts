import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorModule } from './components/calculator/calculator.module';

const routes: Routes = [
  {
    path: 'calculator',
    loadChildren: () =>
      import('./components/calculator/calculator.module').then(
        (m) => m.CalculatorModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: '/calculator' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
