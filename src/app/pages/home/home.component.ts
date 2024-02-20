import { Component } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { TemperatureComponent } from '../../shared/components/temperature/temperature.component';

@Component({
  selector: 'heater-home',
  standalone: true,
  imports: [HomeRoutingModule, TemperatureComponent],
  template: `
    <heater-temperature
      [minimum]="0"
      [maximum]="100"
      [current]="65"
    ></heater-temperature>
  `,
})
export class HomeComponent {}
