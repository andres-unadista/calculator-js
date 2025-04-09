import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IConfiguration } from '../models/config.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configDoc: AngularFirestoreDocument<IConfiguration>;
  config: Observable<IConfiguration | undefined>;

  id = '1';

  constructor(private db: AngularFirestore) {}

  getConfiguration(): Observable<IConfiguration | undefined> {
    this.configDoc = this.db.doc<IConfiguration>('config/' + this.id);
    this.config = this.configDoc.valueChanges();
    return this.config;
  }

  updateConfiguration(config: IConfiguration) {
    this.configDoc = this.db.doc<IConfiguration>('config/' + this.id);
    return this.configDoc.update(config);
  }
}

