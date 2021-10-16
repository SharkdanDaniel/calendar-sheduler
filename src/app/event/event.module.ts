import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { ListEventsComponent } from './list-events/list-events.component';

/* Material */
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ScheduleCalendarComponent } from './list-events/components/schedule-calendar/schedule-calendar.component';
import { DialogDateViewComponent } from './list-events/components/dialog-date-view/dialog-date-view.component';


const material = [
  MatDialogModule,
  MatDialogModule,
  MatSelectModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatTooltipModule,
  MatListModule,
  MatIconModule
]

@NgModule({
  declarations: [
    ListEventsComponent,
    ScheduleCalendarComponent,
    DialogDateViewComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    [...material]
  ]
})
export class EventModule { }
