import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule  } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http' 
import { MdButtonModule, MdCheckboxModule } from '@angular/material'

import { AppComponent } from './app.component';
import { Mycolor } from '../pipe/color';
import { TopComponent } from './top/top.component'
import { HightLightDirective } from './hight-light.directive'
import { UserService } from './user.service'

@NgModule({
  declarations: [
    AppComponent,
    Mycolor,
    TopComponent,
    HightLightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MdButtonModule,
    MdCheckboxModule
    
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
