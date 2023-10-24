import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ImportModulesModule } from 'src/assets/shared/modules/import-modules.module';

import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './home/toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { MainRoutingModule } from './main-routing.module';


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
    ReactiveFormsModule
  ]
})
export class MainModule { }
