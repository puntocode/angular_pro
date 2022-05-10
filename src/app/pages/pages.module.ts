import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { SharedModule } from '../shared/shared.module';
import { GraficasComponent } from './graficas/graficas.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    NopageFoundComponent,
    GraficasComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
