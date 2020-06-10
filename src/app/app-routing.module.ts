import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'world-count', loadChildren: () => import('../app/world/world.module').then(m => m.WorldModule) },
  { path: 'chart-details', loadChildren: () => import('../app/chart/chart.module').then(c => c.ChartModule) },
  { path: 'precaution', loadChildren: () => import('../app/precaution/precaution.module').then(p => p.PrecautionModule) },
  { path: 'essentials', loadChildren: () => import('../app/essentials/essentials.module').then(e => e.EssentialsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
