import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() operation: string = '';
  @Input() accumulated:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getNumberSpanish(number: number) {
    return Intl.NumberFormat('es-ES').format(number);
  }
}
