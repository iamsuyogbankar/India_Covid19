import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EssentialsRoutingModule } from './essentials-routing.module';
import { EssentialComponent } from './essential/essential.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [EssentialComponent],
  imports: [
    CommonModule,
    EssentialsRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ]
})
export class EssentialsModule { }
