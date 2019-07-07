import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Routes } from '@angular/router'
export interface Client {
  clientId: number,
  firstName: string,
  lastName: string,
  company: string,
  group: string,
  nas: string,
  accessPoint: string,
  connection: string,
  userName: string,
  ipAddress: string,
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})

export class ClientsComponent implements OnInit {
  ELEMENT_DATA: []
  dataSource
  demoData: Client[] = [
    {
      clientId: 1,
      firstName: 'Trym',
      lastName: 'Flogard',
      company: '',
      group: '',
      nas: '',
      accessPoint: '',
      connection: '',
      userName: '',
      ipAddress: '', 
    },
    {
      clientId: 2,
      firstName: 'Alexander',
      lastName: 'Oliemans',
      company: '',
      group: 'async-600m-50m',
      nas: 'DAM-AR-01',
      accessPoint: 'DAM-SWITCH-02',
      connection: 'DHCP',
      userName: 'damsport-365',
      ipAddress: '185.216.163.166', 
    }
  ]
  selection = new SelectionModel<any>(true, []);

  displayedColumns: String[] = [
    'firstName',
    'lastName',
    'group',
    'accessPoint',
    'connection',
    'userName',
    'ipAddress'
  ];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Client>(this.demoData)
    this.dataSource.paginator = this.paginator
  }

  filterTable(filter) {
    this.dataSource.filter = filter.trim().toLowerCase()
  }

}
