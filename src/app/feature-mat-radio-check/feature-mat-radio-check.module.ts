import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureMatRadioCheckRoutingModule } from './feature-mat-radio-check-routing.module';
import { FeatureMatRadioCheckComponent } from './feature-mat-radio-check.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Required for ngModel
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    FeatureMatRadioCheckComponent
  ],
  imports: [
    CommonModule,
    FeatureMatRadioCheckRoutingModule,
    FormsModule,
    MatRadioModule,
    MatRadioModule, // For material radio buttons
    MatButtonModule // For button component
    ,ReactiveFormsModule,
    MatCheckboxModule
  ]
})
export class FeatureMatRadioCheckModule { }
