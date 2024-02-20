import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'heater-temperature',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent {
  @Input() minimum!: number; // minimum temperature in degrees centigrade
  @Input() maximum!: number; // maximum temperature in degrees centigrade
  @Input() current!: number; // current temperature in degrees centigrade

  public get currentAngle(): number {
    return this.mapCurrentTemperatureToAngle();
  }

  private mapCurrentTemperatureToAngle(): number {
    // calculate the angle of the needle based on the current temperature
    // clamp the current temperature between the minimum and maximum temperature
    this.current = Math.min(Math.max(this.current, this.minimum), this.maximum);
    // map the current temperature to the range of -135 to 135 degrees
    return (
      -135 +
      ((this.current - this.minimum) / (this.maximum - this.minimum)) * 270
    );
  }
}
