import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-date-view',
  templateUrl: './dialog-date-view.component.html',
  styleUrls: ['./dialog-date-view.component.scss']
})
export class DialogDateViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
}
