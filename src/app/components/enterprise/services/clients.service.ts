import { ElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IClient } from '../models/client.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  clientCollection: AngularFirestoreCollection<IClient>;
  clientDoc: AngularFirestoreDocument<IClient>;
  clients: Observable<IClient[]>;
  client: Observable<IClient>;

  constructor(private db: AngularFirestore) {
    this.clientCollection = db.collection('users', (ref) =>
      ref.orderBy('name', 'asc')
    );
  }

  getClients(): Observable<IClient[]> {
    this.clients = this.clientCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((action) => {
          const data = action.payload.doc.data() as IClient;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
    return this.clients;
  }

  addClient(client: IClient): void {
    this.clientCollection.add(client);
  }

  getClient(idClient: number): Observable<IClient> {
    this.clientDoc = this.db.doc<IClient>(`users/${idClient}`);
    this.client = this.clientDoc.snapshotChanges().pipe(
      map((action) => {
        if (action.payload.exists === false) {
          return {} as IClient;
        } else {
          const data = action.payload.data() as IClient;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.client;
  }

  updateClient(client: IClient) {
    let clientDoc = this.db.doc<IClient>(`users/${client.id}`);
    return clientDoc.update(client);
  }

  deleteClient(idClient: number) {
    let clientDoc = this.db.doc<IClient>(`users/${idClient}`);
    return clientDoc.delete();
  }
}
