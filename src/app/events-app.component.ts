import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `<event-list></event-list>`,
})
export class EventsAppComponent {
  title = 'Events';
}
