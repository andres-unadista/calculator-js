import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'calculator-item',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit, OnDestroy {
  inputOperation: string = '';
  inputAccumulated: number = 0;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.calculatorService.accumulated.subscribe((number:number) => this.inputAccumulated = number);
    this.calculatorService.operation.subscribe((opertation:string) => this.inputOperation = opertation);
    document.body.style.background = "hsla(239, 100%, 67%, 1)";
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('destroy');
    document.body.style.backgroundColor = "#ffffff";
  }
}
