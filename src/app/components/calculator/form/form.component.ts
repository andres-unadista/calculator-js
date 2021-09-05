import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() inputPrevAccumulated: number;
  operation: string = '';
  accumulated: number = 0;
  inputNumber: string = '';
  prevAcumulated: number = 0;
  operationPrevious: number = 0;
  statusModify: boolean = false;

  constructor(private calculatorService:CalculatorService) {}

  ngOnInit(): void {}

  changeValue(operation: number = 1) {
    try {
      let number = +this.inputNumber;
      let stateAccumulated = this.inputPrevAccumulated;
      this.statusModify = this.inputPrevAccumulated ? true : false;
      this.accumulated = !this.inputPrevAccumulated ? 0 : this.inputPrevAccumulated;

      switch (operation) {
        case 1:
          this.accumulated += number;
          this.operationPrevious = 0;
          break;
        case 2:
          this.accumulated -= number;
          this.operationPrevious = 1;
          break;
        case 3:
          this.accumulated = stateAccumulated
            ? this.accumulated * number
            : number;
          this.operationPrevious = 2;
          break;
        case 4:
          this.accumulated = stateAccumulated
            ? this.accumulated / number
            : number;
          this.operationPrevious = 3;
          break;
        case 5:
          this.accumulated = 0;
          this.operation = '';
          this.statusModify = false;
          break;
      }
      this.inputNumber = '';
      let stringOperation = this.setOperationResponse(
        number,
        this.inputPrevAccumulated
      );
      this.setValuesService(stringOperation);
      this.focusInput();
    } catch (error) {
      console.log(error);
    }
  }

  setValuesService(stringOperation:string){
    this.calculatorService.accumulated.emit(this.accumulated);
    this.calculatorService.operation.emit(stringOperation);
  }

  setOperationResponse(number: number, prevAcumulated: number) {
    let operation = '';
    if (this.statusModify) {
      const operations = ['+', '-', '*', '/'];
      const symbolOperation = operations[this.operationPrevious];

      const numberAcumulated = this.getNumberSpanish(
        Number(prevAcumulated.toFixed(2))
      );
      const numberInput = this.getNumberSpanish(Number(number));

      operation = `${numberAcumulated} ${symbolOperation} ${numberInput} = `;
    } else {
      operation = '';
    }
    return operation;
  }

  getNumberSpanish(number: number) {
    return Intl.NumberFormat('es-ES').format(number);
  }

  focusInput() {
    const input: HTMLInputElement = document.getElementById(
      'inputNumber'
    ) as HTMLInputElement;
    input.focus();
  }
}
