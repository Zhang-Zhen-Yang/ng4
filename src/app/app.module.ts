import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule  } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http' 
import { MdButtonModule, MdCheckboxModule,MdDatepickerModule } from '@angular/material'

import { AppComponent } from './app.component';
import { Mycolor } from '../pipe/color';
import { TopComponent } from './top/top.component'
import { HightLightDirective } from './hight-light.directive'
import { UserService } from './user.service';
import { FlyHeroPipe } from './fly-hero.pipe';
import { HeroSyncComponent } from './hero-sync/hero-sync.component'

import { RouterModule, Routes } from '@angular/router'

import {IndexComponent} from './index/Index.component';
import { DIComponent } from './di/di.component';
import { RXComponent } from './rx/rx.component';
import { AnimationComponent } from './animation/animation.component';
import { ComponentComponent } from './component/component.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { ModuleComponent } from './module/module.component';
import { HttpComponent } from './http/http.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { InteractionOneComponent } from './component-interaction/interaction-one/interaction-one.component';
import { InteractionTwoComponent } from './component-interaction/interaction-two/interaction-two.component'

const AppRoutes:Routes = [
  {
    path:'index',
    component:IndexComponent
  },
  {
    path:'component',
    component:ComponentComponent
  },
  {
    path:'directive',
    component:DirectiveComponent
  },
  {
    path:'pipe',
    component:PipeComponent
  },
  {
    path:'di',
    component:DIComponent
  },
  {
    path:'rx',
    component:RXComponent
  },
  {
    path:'animation',
    component:AnimationComponent
  },
  {
    path:'module',
    component:ModuleComponent
  },
  {
    path:'http',
    component:HttpComponent
  },
  {
    path:'lazyLoader',
    loadChildren:'app/modules/lazy-loader/lazy-loader.module#LazyLoaderModule'
  },
  {
    path:'interaction',
    component:ComponentInteractionComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    Mycolor,
    TopComponent,
    HightLightDirective,
    FlyHeroPipe,
    HeroSyncComponent,
    IndexComponent,
    DIComponent,
    RXComponent,
    AnimationComponent,
    ComponentComponent,
    DirectiveComponent,
    PipeComponent,
    ModuleComponent,
    HttpComponent,
    ComponentInteractionComponent,
    InteractionOneComponent,
    InteractionTwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      enableTracing:true
    }),
    FormsModule,
    HttpClientModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule
    
    
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
