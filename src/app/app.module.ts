import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule  } from '@angular/forms'

import { AppComponent } from './app.component';
import { Mycolor } from '../pipe/color';
import { TopComponent } from './top/top.component'

@NgModule({
  declarations: [
    AppComponent,
    Mycolor,
    TopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
