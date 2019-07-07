import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { GroupsComponent } from './groups/groups.component';
import { AccessPointsComponent } from './access-points/access-points.component';
import { UpdateClientComponent } from './clients/update-client/update-client.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'clients', component: ClientsComponent},
    {path: 'clients/update/:clientId', component: UpdateClientComponent},
    {path: 'groups', component: GroupsComponent},
    {path: 'access_points', component: AccessPointsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
