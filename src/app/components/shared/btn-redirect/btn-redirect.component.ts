import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'btn-redirect',
    templateUrl: './btn-redirect.component.html',
    styleUrls: ['./btn-redirect.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class BtnRedirectComponent implements OnInit {
  @Input() link:string;
  @Input() description:string;

  constructor() { }

  ngOnInit(): void {
  }

}
