import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherService} from './weather.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    WeatherComponent,
  ],
  providers:[
    WeatherService
  ]
})
export class WeatherModule { }