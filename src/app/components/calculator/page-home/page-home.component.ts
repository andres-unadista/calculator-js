import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-item',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
  accumulated: number = 0;
  inputNumber: string = '';
  operation: string = '';
  prevAcumulated: number = 0;
  operationPrevious: number = 0;
  statusModify: boolean = false;
  statusCleanData: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  changeValue(operation: number = 1) {
    try {
      let number = +this.inputNumber;
      console.log(number);
      let previousAcumulated = this.accumulated;
      let stateAccumulated = this.accumulated;
      this.statusModify = this.accumulated ? true : false;

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
      this.accumulated = isNaN(this.accumulated) ? 0 : this.accumulated;
      this.focusInput();
      this.setOperationResponse(number, previousAcumulated);
    } catch (error) {
      console.log(error);
    }
  }

  setOperationResponse(number: number, prevAcumulated: number) {
    if (this.statusModify) {
      const operations = ['+', '-', '*', '/'];
      const symbolOperation = operations[this.operationPrevious];

      const numberAcumulated = this.getNumberSpanish(
        Number(prevAcumulated.toFixed(2))
      );
      const numberInput = this.getNumberSpanish(Number(number));

      this.operation = `${numberAcumulated} ${symbolOperation} ${numberInput} = `;
    } else {
      this.operation = '';
    }
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
