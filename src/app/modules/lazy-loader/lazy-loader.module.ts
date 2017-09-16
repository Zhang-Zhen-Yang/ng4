import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router'
import { LazyindexComponent } from './lazyindex/lazyindex.component'
const LazyRoutes:Routes=[
  {
    path:'',
    component:LazyindexComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LazyRoutes)
  ],
  exports:[RouterModule],
  declarations: [
    LazyindexComponent
  ]
})
export class LazyLoaderModule { }
