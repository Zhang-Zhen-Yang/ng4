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
import { UserService } from './user.service';
import { FlyHeroPipe } from './fly-hero.pipe';
import { HeroSyncComponent } from './hero-sync/hero-sync.component'

@NgModule({
  declarations: [
    AppComponent,
    Mycolor,
    TopComponent,
    HightLightDirective,
    FlyHeroPipe,
    HeroSyncComponent
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
