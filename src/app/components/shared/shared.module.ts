import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BtnRedirectComponent } from './btn-redirect/btn-redirect.component';



@NgModule({
  declarations: [
    BtnRedirectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    BtnRedirectComponent
  ]
})
export class SharedModule { }
