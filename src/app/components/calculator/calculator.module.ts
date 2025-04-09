import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';

import { ResultComponent } from './result/result.component';
import { FormComponent } from './form/form.component';
import { CalculatorService } from './calculator.service';


@NgModule({
    imports: [
    CommonModule,
    CalculatorRoutingModule,
    PageHomeComponent,
    ResultComponent,
    FormComponent
],
    providers: [
        CalculatorService
    ],
    exports: [
        PageHomeComponent
    ]
})
export class CalculatorModule { }
