import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { CarouselModule } from 'primeng/carousel';
import { MenuModule } from 'primeng/menu';
import { SkeletonModule } from 'primeng/skeleton';
import { SpeedDialModule } from 'primeng/speeddial';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    // Material
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    // Primeng
    AvatarModule,
    CarouselModule,
    SpeedDialModule,
    MenuModule,
    ToastModule,
    TooltipModule,
    TagModule,
    SkeletonModule
  ],
  providers: [MessageService]
})
export class ImportModulesModule { }
