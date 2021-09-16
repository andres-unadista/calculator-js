import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { IClient } from '../models/client.interface';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients: IClient[] = [];
  client2: IClient = {} as IClient;

  @ViewChild('btnClose') btnClose: ElementRef;
  @ViewChild('clientForm') clientForm: NgForm;

  constructor(private _client: ClientsService, private toast:ToastrService) {}

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
      this.toast.error('El formulario no es válido. Por favor, debe diligenciar correctamente el formulario.');
    } else {
      // add client
      this._client.addClient(this.client2);
      this.clientForm.resetForm();
      this.btnClose.nativeElement.click();
      console.log(value);
    }
  }
}
