import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
