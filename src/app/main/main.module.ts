import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImportModulesModule } from 'src/app/shared/modules/import-modules.module';

import { LoginComponent } from '../admin/login/login.component';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    LoginComponent,
    ProjectsComponent,
    MainComponent,
    CarouselComponent
  ],

  imports: [
    CommonModule,
    MainRoutingModule,
    ImportModulesModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MainModule { }
