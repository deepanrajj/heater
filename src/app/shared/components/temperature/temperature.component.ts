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
  @Input() target!: number; // current target temperature in degrees centigrade

  public get targetAngle(): number {
    return this.mapTargetTemperatureToAngle();
  }

  private mapTargetTemperatureToAngle(): number {
    // calculate the angle of the needle based on the target temperature
    // clamp the target temperature between the minimum and maximum temperature
    this.target = Math.min(Math.max(this.target, this.minimum), this.maximum);
    // map the target temperature to the range of -135 to 135 degrees
    return (
      -135 +
      ((this.target - this.minimum) / (this.maximum - this.minimum)) * 270
    );
  }
}
