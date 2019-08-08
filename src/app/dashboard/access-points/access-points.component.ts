import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AccessPointService, AccessPoint } from '../services/accesspoint.service';

@Component({
  selector: 'app-access-points',
  templateUrl: './access-points.component.html',
  styleUrls: ['./access-points.component.scss']
})
export class AccessPointsComponent implements OnInit {

  dataSource: MatTableDataSource<AccessPoint>

  tableUpdated: boolean = false

  updatedRows: Array<AccessPoint> = []

  displayedColumns = ['name', 'ip']

  demoData: AccessPoint[] = [
    {
      id: 0,
      name: 'demo',
      ip: '192.168.1.1',
    },
    {
      id: 1,
      name: 'demo2',
      ip: '192.168.1.3',
    }
  ]

  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor( private accessPointService: AccessPointService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<AccessPoint>(this.demoData)
    this.dataSource.paginator = this.paginator
  }

  filterTable(filter) {
    this.dataSource.filter = filter.trim().toLowerCase()
  }

  update(updated, row) {
    if (updated) {
      if(!this.updatedRows.find(updated => updated.id === row.id)) {
        this.updatedRows.push(row);
      }
    }
  }

  reset() {
    this.dataSource.data = [
      {
        id: 0,
        name: 'demo',
        ip: '192.168.1.1',
      },
      {
        id: 1,
        name: 'demo2',
        ip: '192.168.1.3',
      }
    ]
  }
  save() {
    this.accessPointService.pushAccessPointSettings(this.updatedRows)
  }

}
