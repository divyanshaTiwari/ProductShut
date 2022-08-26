import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './AdminLogin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
