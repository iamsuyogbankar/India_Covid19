import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PrevantionComponent } from './prevantion/prevantion.component';


const routes: Routes = [
  { path: 'symptoms', component: SymptomsComponent },
  { path: 'prevantion', component: PrevantionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrecautionRoutingModule { }
