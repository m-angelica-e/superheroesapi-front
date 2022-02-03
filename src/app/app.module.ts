import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Rute
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Table1Component } from './component/table1/table1.component';
import { EditComponent } from './component/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Table1Component,
    EditComponent,
  ],
  imports: [
    BrowserModule, 
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
