import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Groups {
  name: string,
  download: number,
  upload: number,
  concurrent: number,
  expiry: number,
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  dataSource: MatTableDataSource<Groups>

  tableUpdated: boolean = false

  displayedColumns = ['name', 'download', 'upload', 'concurrent', 'expiry']

  demoData: Groups[] = [
    {
      name: 'demo',
      download: 100,
      upload: 10,
      concurrent: 5,
      expiry: 2592000,
    }
  ]

  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Groups>(this.demoData)
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
        download: 100,
        upload: 10,
        concurrent: 5,
        expiry: 2592000,
      }
    ]
  
  }

}
