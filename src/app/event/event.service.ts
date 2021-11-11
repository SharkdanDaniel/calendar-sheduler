import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get('assets/events.json');
  }
  // getEvents() {
  //   return this.http.get(environment.baseURL);
  // }
}
