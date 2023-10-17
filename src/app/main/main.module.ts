import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './home/toolbar/toolbar.component';
import { ImportModulesModule } from 'src/assets/shared/import-modules/import-modules.module';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ImportModulesModule
  ]
})
export class MainModule { }
