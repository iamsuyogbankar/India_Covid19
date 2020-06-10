import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartDeepdiveComponent } from './chart-deepdive/chart-deepdive.component';

import { ChartsModule } from 'ng2-charts';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [ChartDeepdiveComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    ChartsModule,
    NgxSpinnerModule
  ]
})
export class ChartModule {
  constructor(){
    console.log("Chart module loaded");
    
  }
 }
