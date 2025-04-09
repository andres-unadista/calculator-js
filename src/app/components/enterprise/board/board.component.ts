import { Component, OnInit } from '@angular/core';
import { ClientsComponent } from '../clients/clients.component';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
    standalone: true,
    imports: [ClientsComponent]
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
