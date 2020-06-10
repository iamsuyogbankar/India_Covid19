import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldCountComponent } from './world-count/world-count.component';


const routes: Routes = [
  { path: '', component: WorldCountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldRoutingModule { }
