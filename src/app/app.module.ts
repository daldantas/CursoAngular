import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Aula3Component } from './aula3/aula3.component';
import { Aula4Component } from './aula4/aula4.component';

@NgModule({
  declarations: [
    AppComponent,
    Aula3Component,
    Aula4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
