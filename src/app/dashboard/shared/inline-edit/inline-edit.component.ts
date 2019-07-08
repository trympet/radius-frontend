import { Component, Input, Optional, Host, Output, EventEmitter } from '@angular/core';
import { SatPopover } from '@ncstate/sat-popover';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'inline-edit',
  styleUrls: ['inline-edit.component.scss'],
  template: `
    <form (ngSubmit)="onSubmit()">
      <div class="mat-subheading-2">Edit value</div>

      <mat-form-field>
        <input matInput [maxLength]="inputLength" name="comment" [(ngModel)]="comment">
        <mat-hint align="end">{{comment?.length || 0}}/{{ inputLength }}</mat-hint>
      </mat-form-field>

      <div class="actions">
        <button mat-button type="button" color="primary" (click)="onCancel()">CANCEL</button>
        <!-- Disables save button if value hasn't changed or if comment length is 0 -->
        <button mat-button type="submit" color="primary" [disabled]="!comment.length || this._value === this.comment">SAVE</button>
      </div>
    </form>
  `
})
export class InlineEditComponent {

  /** Overrides the comment and provides a reset value when changes are cancelled. */
  @Input()
  get value(): string { return this._value; }
  set value(x: string) {
    this.comment = this._value = x;
  }
  @Input()
  get length() { return this.inputLength }
  set length(x: number) { this.inputLength = x }

  @Output() valueChange = new EventEmitter()



  _value = ''; // original value of field
  inputLength: number // max length of input

  /** Form model for the input. */
  comment = '';

  constructor(@Optional() @Host() public popover: SatPopover) { }

  ngOnInit() {
    // subscribe to cancellations and reset form value
    if (this.popover) {
      this.popover.closed.pipe(filter(val => val == null))
        .subscribe(() => this.comment = this.value || '');
    }
  }

  onSubmit() {
    if (this.popover) {
      this.popover.close(this.comment);
      this.valueChange.emit(true)
    }
  }
  
  onCancel() {
    if (this.popover) {
      this.popover.close();
      this.comment = this._value // resets comment to original value
      this.valueChange.emit(false)
    }
  }
}