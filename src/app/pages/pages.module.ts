import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { SharedModule } from '../shared/shared.module';
import { GraficasComponent } from './graficas/graficas.component';
import { ProgressComponent } from './progress/progress.component';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PormesasComponent } from './pormesas/pormesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    NopageFoundComponent,
    GraficasComponent,
    ProgressComponent,
    AccountSettingsComponent,
    PormesasComponent,
    RxjsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
