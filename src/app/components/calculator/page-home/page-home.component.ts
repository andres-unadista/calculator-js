import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'calculator-item',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageHomeComponent implements OnInit {
  inputOperation: string = '';
  inputAccumulated: number = 0;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.calculatorService.accumulated.subscribe((number:number) => this.inputAccumulated = number);
    this.calculatorService.operation.subscribe((opertation:string) => this.inputOperation = opertation);
  }
}
