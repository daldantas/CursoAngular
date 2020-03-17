import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Aula3Component } from './aula3/aula3.component';
import { Aula4Component } from './aula4/aula4.component';
import { Aula5Module } from './aula5/aula5.module';

@NgModule({
  declarations: [
    AppComponent,
    Aula3Component,
    Aula4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Aula5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
