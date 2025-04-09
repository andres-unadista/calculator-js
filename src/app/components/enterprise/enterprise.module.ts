import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { BoardComponent } from './board/board.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ConfigComponent } from './config/config.component';
import { FooterComponent } from './footer/footer.component';

import { environment } from 'src/environments/environment';
import { ClientsService } from './services/clients.service';
import { AuthService } from './services/auth.service';
import { ConfigService } from './services/config.service';
import { RegisterGuard } from './guards/register.guard';



@Injectable({
    providedIn: 'root'
})
@NgModule({
    imports: [
    CommonModule,
    EnterpriseRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BoardComponent,
    MainComponent,
    HeaderComponent,
    ConfigComponent,
    FooterComponent,
],
    providers: [
        ClientsService,
        AuthService,
        ConfigService,
        RegisterGuard
    ]
})
export class EnterpriseModule { }
