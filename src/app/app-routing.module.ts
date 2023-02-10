import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './events/events-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'events-lists' },
  { path: 'events-lists', component: EventListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
