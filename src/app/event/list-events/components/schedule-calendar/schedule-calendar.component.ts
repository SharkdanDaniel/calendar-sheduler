import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { parseISO } from 'date-fns';
import { noop, Subscription } from 'rxjs';
import { DateEvent, Match } from '../../models/event.model';
import { DialogDateViewComponent } from '../dialog-date-view/dialog-date-view.component';

const DAY_MS = 60 * 60 * 24 * 1000;

const YEARS = [2019, 2020];

const MONTHS = [
  { value: 0, displayName: 'January' },
  { value: 1, displayName: 'February' },
  { value: 2, displayName: 'March' },
  { value: 3, displayName: 'April' },
  { value: 4, displayName: 'May' },
  { value: 5, displayName: 'June' },
  { value: 6, displayName: 'July' },
  { value: 7, displayName: 'August' },
  { value: 8, displayName: 'September' },
  { value: 9, displayName: 'October' },
  { value: 10, displayName: 'November' },
  { value: 11, displayName: 'December' },
];

@Component({
  selector: 'app-schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: ['./schedule-calendar.component.scss'],
})
export class ScheduleCalendarComponent implements OnInit {
  private _events: Match[] = [];
  public dates: DateEvent[] = [];
  public week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public months = MONTHS;
  public years = YEARS;

  @Input() maxYear = 2020;
  @Input() minYear = 2019;
  @Input('initialDate') date = new Date();
  @Input() set events(value: Match[]) {
    this.dates = this.getCalendarDays(this.date, value);
    this._events = value;
  }
  @Output() selected = new EventEmitter();

  get events() {
    return this._events;
  }

  get currentMonth() {
    return this.date.getMonth();
  }

  set currentMonth(month: number) {
    this.setMonth(0, month, this.currentYear);
  }

  get currentYear() {
    return this.date.getFullYear();
  }

  set currentYear(year: number) {
    this.setMonth(0, this.currentMonth, year);
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dates = this.getCalendarDays(this.date);
  }

  openDialog(date: DateEvent) {
    const dialogRef = this.dialog.open(DialogDateViewComponent, {
      data: date,
      panelClass: 'calendar-dialog',
    });

    dialogRef.afterClosed().subscribe((result) => noop);
  }

  setMonth(
    inc: any,
    month = this.date.getMonth(),
    year = this.date.getFullYear()
  ) {
    this.date = new Date(year, month + inc, 1);
    this.dates = this.getCalendarDays(this.date, this.events);
  }

  isSameMonth(date: Date) {
    return date.getMonth() === this.date.getMonth();
  }

  getShortTitle(event: Match) {
    return `${event.team1.slice(0, 3).toUpperCase()} ${event.score.ft[0]} x ${event.score.ft[1]
      } ${event.team2.slice(0, 3).toUpperCase()}`;
  }

  /* Private Methods */

  private getCalendarDays(date = new Date(), events?: Match[]) {
    const calendarStartTime = this.getCalendarStartDay(date)?.getTime();

    return this.range(0, 41).map((num) => {
      const date = new Date(calendarStartTime! + DAY_MS * num);
      return {
        date,
        events: events?.filter((event: Match) => {
          return parseISO(event.date).toDateString() == date.toDateString();
        }),
      } as DateEvent;
    });
  }

  private getCalendarStartDay(date = new Date()) {
    const [year, month] = [date.getFullYear(), date.getMonth()];
    const firstDayOfMonth = new Date(year, month, 1).getTime();

    return this.range(1, 7)
      .map((num) => new Date(firstDayOfMonth - DAY_MS * num))
      .find((dt) => dt.getDay() === 0);
  }

  private range(start: any, end: any, length = end - start + 1) {
    return Array.from({ length }, (_, i) => start + i);
  }
}
