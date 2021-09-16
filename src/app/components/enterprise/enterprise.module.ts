import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { BoardComponent } from './board/board.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { ConfigComponent } from './config/config.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsService } from './services/clients.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BoardComponent,
    MainComponent,
    HeaderComponent,
    ClientsComponent,
    ConfigComponent,
    EditClientComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    EnterpriseRoutingModule,
    SharedModule
  ],
  providers: [
    ClientsService
  ]
})
export class EnterpriseModule { }
