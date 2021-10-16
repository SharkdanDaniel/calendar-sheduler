import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventService } from './../../event.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Match } from './models/event.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  
  public events: Match[] = [];
  public initialDate = new Date('2019-8-9');

  constructor(private eventService: EventService, private loading: NgxSpinnerService) { }
  
  ngOnInit(): void {
    this.getEvents();
  }
  
  getEvents() {
    this.loading.show();
    this.subscription = this.eventService
    .getEvents()
    .pipe(finalize(() => this.loading.hide()))
    .subscribe(({ matches }: any) => {
      this.events = matches;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
