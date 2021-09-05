import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { SharedModule } from '../shared/shared.module';
import { ResultComponent } from './result/result.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    PageHomeComponent,
    ResultComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    SharedModule
  ],
  exports: [
    PageHomeComponent
  ]
})
export class CalculatorModule { }
