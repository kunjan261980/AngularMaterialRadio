import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMatRadioCheckComponent } from './feature-mat-radio-check.component';

describe('FeatureMatRadioCheckComponent', () => {
  let component: FeatureMatRadioCheckComponent;
  let fixture: ComponentFixture<FeatureMatRadioCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureMatRadioCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureMatRadioCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
