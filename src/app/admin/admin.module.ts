import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ImportModulesModule } from 'src/app/shared/modules/import-modules.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { EditTextsComponent } from './edit-texts/edit-texts.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    EditTextsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ImportModulesModule
  ]
})
export class AdminModule { }
