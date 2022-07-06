import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './partial/header/header.component';
import { Exo1Component } from './page/exo1/exo1.component';
import { Exo2Component } from './page/exo2/exo2.component';
import { Exo3Component } from './page/exo3/exo3.component';
import { Exo4Component } from './page/exo4/exo4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Exo1Component,
    Exo2Component,
    Exo3Component,
    Exo4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
