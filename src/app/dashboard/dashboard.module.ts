import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { NavComponent } from './nav/nav.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { GroupsComponent } from './groups/groups.component';
import { AccessPointsComponent } from './access-points/access-points.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatRippleModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
} from '@angular/material';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, DashboardComponent, NavComponent, ClientsComponent, GroupsComponent, AccessPointsComponent,],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRippleModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule
  ]
})
export class DashboardModule { }
