import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Module1Module } from './components/module1/module1.module';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
