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
  MatTabsModule,
  MatTooltipModule,
} from '@angular/material';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateClientComponent } from './clients/update-client/update-client.component';
import {ShContextMenuModule} from 'ng2-right-click-menu' // right click context menu
import { HttpClientModule } from '@angular/common/http';
import { ConnectionComponent } from './clients/update-client/connection/connection.component';
import { ContactComponent } from './clients/update-client/contact/contact.component';
import { InlineEditComponent } from './shared/inline-edit/inline-edit.component';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { TableHeaderComponent } from './shared/table/table-header.component';


@NgModule({
  declarations: [HomeComponent, DashboardComponent, NavComponent, ClientsComponent, GroupsComponent, AccessPointsComponent, UpdateClientComponent, ConnectionComponent, ContactComponent, InlineEditComponent, TableHeaderComponent,],
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
    FormsModule,
    ShContextMenuModule,
    HttpClientModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    SatPopoverModule,
    MatTooltipModule
  ]
})
export class DashboardModule { }
