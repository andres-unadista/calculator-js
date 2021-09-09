import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalculatorModule } from './components/calculator/calculator.module';
import { DataService } from './data-service.service';
import { environment } from '../environments/environment';
import { LoginService } from './components/budget/login/login.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule,
    HttpClientModule,
  ],
  providers: [DataService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
