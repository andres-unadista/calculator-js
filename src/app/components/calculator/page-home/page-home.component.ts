import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-item',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
  inputOperation: string = '';
  inputAccumulated: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
