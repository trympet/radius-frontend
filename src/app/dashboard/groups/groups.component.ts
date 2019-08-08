import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GroupService, Group } from '../services/group.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  dataSource: MatTableDataSource<Group>

  updatedRows: Array<any> = [] // table rows that have been updated

  displayedColumns = ['name', 'download', 'upload', 'concurrent', 'expiry']

  demoData: Group[] = [
    {
      id: 0,
      name: 'demo',
      download: 100,
      upload: 10,
      concurrent: 5,
      expiry: 2592000,
    }
  ]

  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor( private groupService: GroupService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Group>(this.demoData)
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
        download: 100,
        upload: 10,
        concurrent: 5,
        expiry: 2592000,
      }
    ]
  }

  save() {
    this.groupService.pushGroupSettings(this.updatedRows)
  }

}
