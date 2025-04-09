import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { BoardComponent } from './board/board.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { ConfigComponent } from './config/config.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

import { environment } from 'src/environments/environment';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { ClientsService } from './services/clients.service';
import { AuthService } from './services/auth.service';
import { ConfigService } from './services/config.service';
import { RegisterGuard } from './guards/register.guard';



@NgModule({
  imports: [
    CommonModule,
    EnterpriseRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
],
  providers: [
    RegisterGuard
  ]
})
export class EnterpriseModule { }
