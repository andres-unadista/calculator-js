import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

import { IClient } from '../models/client.interface';
import { ClientsService } from '../services/clients.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
})
export class ClientsComponent implements OnInit {
  clients: IClient[] = [];
  client2: IClient = {} as IClient;

  @ViewChild('btnClose') btnClose: ElementRef;
  @ViewChild('clientForm') clientForm: NgForm;

  constructor(private _client: ClientsService) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this._client.getClients().subscribe((clients) => {
      this.clients = clients;
      this.getTotal();
      console.log(clients);
    });
  }

  getTotal() {
    let total: number = 0;
    this.clients.forEach((client) => {
      total += client.balance;
    });
    return total;
  }

  addClient({value, valid}: {value:IClient, valid: boolean | null}){
    if (!valid) {
    } else {
      // add client
      this._client.addClient(this.client2);
      this.clientForm.resetForm();
      this.btnClose.nativeElement.click();
      console.log(value);
    }
  }
}
