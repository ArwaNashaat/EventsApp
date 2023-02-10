import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'event-list',
  templateUrl: './events-list.component.html',
})
export class EventListComponent {
  events = {
    id: 1,
    name: 'Angular Connect',
    date: '8/2/2023',
    time: '10:00 AM',
    price: 55.6,
  };
}
