import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrecautionRoutingModule } from './precaution-routing.module';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PrevantionComponent } from './prevantion/prevantion.component';


@NgModule({
  declarations: [SymptomsComponent, PrevantionComponent],
  imports: [
    CommonModule,
    PrecautionRoutingModule
  ]
})
export class PrecautionModule { 
  constructor(){
    console.log("Precaution Module Loaded");
    
  }
}
