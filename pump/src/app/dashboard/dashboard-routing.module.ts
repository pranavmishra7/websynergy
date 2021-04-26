import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PumpOverviewComponent } from './pump-overview/pump-overview.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'overview',
      component:PumpOverviewComponent
    }])
  ]
})
export class DashboardRoutingModule { }
