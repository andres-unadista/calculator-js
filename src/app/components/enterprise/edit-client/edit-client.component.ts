import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IClient } from '../models/client.interface';
import { ClientsService } from '../services/clients.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class EditClientComponent implements OnInit {
  client: IClient;
  idClient: number;

  constructor(
    private aRoute: ActivatedRoute,
    private router: Router,
    private _client: ClientsService
  ) {}

  ngOnInit(): void {
    this.idClient = this.aRoute.snapshot.params['id'];
    this.getClient();
  }

  getClient() {
    this._client.getClient(this.idClient).subscribe((client) => {
      this.client = client;
      console.log(this.client);
    });
  }

  updateClient({ value, valid }: { value: IClient; valid: boolean | null }) {
    if (valid) {
      this._client
        .updateClient(this.client)
        .then(() => {
          this.router.navigateByUrl('/enterprise');
        })
        .catch((err) => console.error(err));
    } else {
    }
  }

  deleteClient() {
    let stateDelete = confirm('¿Desea eliminar el cliente?');

    if (stateDelete) {
      this._client
        .deleteClient(this.idClient)
        .then(() => {
          this.router.navigateByUrl('/enterprise');
        })
        .catch((err) => console.error(err));
    }
  }
}
