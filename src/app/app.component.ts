import { Component } from '@angular/core';
import { SerieListComponent } from './series/serie-list/serie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SerieListComponent],
  template: `<app-serie-list></app-serie-list>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taller-angular';
}
