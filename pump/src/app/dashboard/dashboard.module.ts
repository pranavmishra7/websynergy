import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PumpOverviewComponent } from './pump-overview/pump-overview.component';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    PumpOverviewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSelectModule
  ]
})
export class DashboardModule { }
