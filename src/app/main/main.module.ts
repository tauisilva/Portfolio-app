import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './home/toolbar/toolbar.component';
import { ImportModulesModule } from 'src/assets/shared/import-modules/import-modules.module';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ImportModulesModule,
    MatCardModule
  ]
})
export class MainModule { }
