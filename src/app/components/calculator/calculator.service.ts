import { EventEmitter } from "@angular/core";

export class CalculatorService {
  operation = new EventEmitter<string>();
  accumulated= new EventEmitter<number>();
}
