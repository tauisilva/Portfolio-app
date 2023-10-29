import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { CarouselModule } from 'primeng/carousel';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DataViewModule } from 'primeng/dataview';
import { MenuModule } from 'primeng/menu';
import { RatingModule } from 'primeng/rating';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SpeedDialModule } from 'primeng/speeddial';
import { TabMenuModule } from 'primeng/tabmenu';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

import { Products } from '../services/products.service';

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
    MatSidenavModule,
    // Primeng
    AvatarModule,
    CarouselModule,
    ConfirmPopupModule,
    SpeedDialModule,
    MenuModule,
    ToastModule,
    TooltipModule,
    SidebarModule,
    TagModule,
    SkeletonModule,
    TabMenuModule,
    DataViewModule,
    RatingModule
  ],
  providers: [MessageService, ConfirmationService, Products]
})
export class ImportModulesModule { }
