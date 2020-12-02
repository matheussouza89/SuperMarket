import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { FabricanteListComponent } from './fabricante/fabricante-list/fabricante-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainToolbarComponent,
    FabricanteListComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
