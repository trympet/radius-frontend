import { Component, OnInit , Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  @Input() saveDisabled: boolean
  @Input() filterLabel: string
  @Input() noSaveButton: boolean

  @Output() filterValue = new EventEmitter<string>() // value of filter
  @Output() onSave = new EventEmitter<boolean>() // emitted when saved
  @Output() onReset = new EventEmitter<boolean>() // emitted when saved

  constructor() { }

  ngOnInit() {
  }

  filterOutput(value: string) {
    this.filterValue.emit(value)
  }

  save() {
    this.onSave.emit(true)
  }

  reset() {
    this.onReset.emit(true)
  }



}
