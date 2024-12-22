import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'matselect', loadChildren: () => import('./feature-mat-select/feature-mat-select.module').then(m => m.FeatureMatSelectModule) }, 
  { path: 'matradiocheck', loadChildren: () => import('./feature-mat-radio-check/feature-mat-radio-check.module').then(m => m.FeatureMatRadioCheckModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
