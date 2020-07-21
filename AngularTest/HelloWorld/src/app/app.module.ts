import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';

import { NavigationComponent } from './navigation/navigation.component';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CurrencyModule } from './currency/currency.module';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    CurrencyModule,
    WeatherModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
