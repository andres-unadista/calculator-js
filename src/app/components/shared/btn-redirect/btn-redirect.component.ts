import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btn-redirect',
  templateUrl: './btn-redirect.component.html',
  styleUrls: ['./btn-redirect.component.scss']
})
export class BtnRedirectComponent implements OnInit {
  @Input() link:string;
  @Input() description:string;

  constructor() { }

  ngOnInit(): void {
  }

}
