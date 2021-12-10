import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinsComponent } from './coins/coins.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AddCoinComponent } from './add-coin/add-coin.component';
import { CoinComponent } from './coin/coin.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { LoginUserComponent } from './login-user/login-user.component';
import { AddUserComponent } from './add-user/add-user.component';

PlotlyModule.plotlyjs = PlotlyJS;


@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    AddCoinComponent,
    CoinComponent,
    LoginUserComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    PlotlyModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
