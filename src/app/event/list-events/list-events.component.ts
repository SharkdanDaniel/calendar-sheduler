import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Observable, of } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Match } from './models/event.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {  
  public events$: Observable<Match[]> = of([])
  public initialDate = new Date('2019-8-9');

  constructor(private eventService: EventService, private loading: NgxSpinnerService) { }
  
  ngOnInit(): void {
    this.getEvents();
  }
  
  getEvents() {
    this.loading.show();
    this.events$ = this.eventService
    .getEvents()
    .pipe(
      map((res: any) => res.matches as Match[] ),
      finalize(() => this.loading.hide()))
  }
}
