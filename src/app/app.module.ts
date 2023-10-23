import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImportModulesModule } from 'src/assets/shared/import-modules/import-modules.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ImportModulesModule,
    MainModule

  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
