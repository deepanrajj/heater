import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TemperatureComponent } from '../../shared/components/temperature/temperature.component';

describe(HomeComponent.name, () => {
  let unitUnderTest: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRoutingModule, TemperatureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    unitUnderTest = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the home component', () => {
    expect(unitUnderTest).toBeTruthy();
  });
});
