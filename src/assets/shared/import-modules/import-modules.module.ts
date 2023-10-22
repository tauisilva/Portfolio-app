import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    // Material
    MatCardModule,
    MatToolbarModule,
    // Primeng
    SpeedDialModule,
    MenuModule,
    ToastModule
  ],
  providers:[MessageService ]
})
export class ImportModulesModule { }
