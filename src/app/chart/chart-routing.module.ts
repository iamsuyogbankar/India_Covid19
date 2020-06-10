import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartDeepdiveComponent } from './chart-deepdive/chart-deepdive.component';


const routes: Routes = [
  { path: '', component: ChartDeepdiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
