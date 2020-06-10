import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldRoutingModule } from './world-routing.module';
import { WorldCountComponent } from './world-count/world-count.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CountToModule } from 'angular-count-to';

@NgModule({
  declarations: [WorldCountComponent],
  imports: [
    CommonModule,
    WorldRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxSpinnerModule,
    CountToModule
  ]
})
export class WorldModule {
  constructor() {
    console.log("Word Module Loaded");

  }
}
