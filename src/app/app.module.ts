import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.components';

@NgModule({
  declarations: [EventsAppComponent, EventListComponent],
  imports: [BrowserModule],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
