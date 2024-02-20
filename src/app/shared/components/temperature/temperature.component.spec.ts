import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TemperatureComponent } from './temperature.component';

describe(TemperatureComponent.name, () => {
  let unitUnderTest: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;
  const minAngle = -135;
  const maxAngle = 135;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureComponent);
    unitUnderTest = fixture.componentInstance;
    unitUnderTest.minimum = 0;
    unitUnderTest.maximum = 100;
    unitUnderTest.target = 65;
    fixture.detectChanges();
  });

  it('should create the temperature component', () => {
    expect(unitUnderTest).toBeTruthy();
  });

  describe('#targetAngle', () => {
    it('should return the target angle, when target temp. is within min and max', () => {
      expect(unitUnderTest.targetAngle).toBeDefined();
    });

    it('should return the minimum angle, when target temp. is lesser than min', () => {
      unitUnderTest.target = -10;
      fixture.detectChanges();
      expect(unitUnderTest.target).toEqual(unitUnderTest.minimum);
      expect(unitUnderTest.targetAngle).toEqual(minAngle);
    });

    it('should return the target angle, when target temp. is greater than max', () => {
      unitUnderTest.target = 108;
      fixture.detectChanges();
      expect(unitUnderTest.target).toEqual(unitUnderTest.maximum);
      expect(unitUnderTest.targetAngle).toEqual(maxAngle);
    });
  });
});
