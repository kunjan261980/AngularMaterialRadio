import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureMatRadioCheckComponent } from './feature-mat-radio-check.component';

const routes: Routes = [{ path: '', component: FeatureMatRadioCheckComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureMatRadioCheckRoutingModule { }
