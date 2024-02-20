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
    unitUnderTest.current = 65;
    fixture.detectChanges();
  });

  it('should create the temperature component', () => {
    expect(unitUnderTest).toBeTruthy();
  });

  describe('#currentAngle', () => {
    it('should return the current angle, when current temp. is within min and max', () => {
      expect(unitUnderTest.currentAngle).toBeDefined();
    });

    it('should return the minimum angle, when current temp. is lesser than min', () => {
      unitUnderTest.current = -10;
      fixture.detectChanges();
      expect(unitUnderTest.current).toEqual(unitUnderTest.minimum);
      expect(unitUnderTest.currentAngle).toEqual(minAngle);
    });

    it('should return the current angle, when current temp. is greater than max', () => {
      unitUnderTest.current = 108;
      fixture.detectChanges();
      expect(unitUnderTest.current).toEqual(unitUnderTest.maximum);
      expect(unitUnderTest.currentAngle).toEqual(maxAngle);
    });
  });
});
