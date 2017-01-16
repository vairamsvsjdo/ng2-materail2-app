import {Component, Optional} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

@Component({
  templateUrl: `./dialog.content.component.html`,
  styleUrls: ['./dialog.content.component.scss']
})
export class DialogContentComponent {
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContentComponent>) { }
}