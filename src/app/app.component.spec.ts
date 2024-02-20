import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  let unitUnderTest: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    unitUnderTest = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(unitUnderTest).toBeTruthy();
  });
});
