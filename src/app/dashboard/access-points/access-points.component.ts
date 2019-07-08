import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface AccessPoints {
  name: string,
  ip: string,
}

@Component({
  selector: 'app-access-points',
  templateUrl: './access-points.component.html',
  styleUrls: ['./access-points.component.scss']
})
export class AccessPointsComponent implements OnInit {

  dataSource: MatTableDataSource<AccessPoints>

  tableUpdated: boolean = false

  displayedColumns = ['name', 'ip']

  demoData: AccessPoints[] = [
    {
      name: 'demo',
      ip: '192.168.1.1',
    },
    {
      name: 'demo2',
      ip: '192.168.1.3',
    }
  ]

  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<AccessPoints>(this.demoData)
    this.dataSource.paginator = this.paginator
  }

  filterTable(filter) {
    this.dataSource.filter = filter.trim().toLowerCase()
  }

  update(updated: boolean) {
    if (updated) {
      this.tableUpdated = true
      console.log('updated!');
      
    }
  }

  reset() {
    this.dataSource.data = [
      {
        name: 'demo',
        ip: '192.168.1.1',
      },
      {
        name: 'demo2',
        ip: '192.168.1.3',
      }
    ]
  
  }

}
