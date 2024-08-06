import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListToDoComponent } from './list-to-do/list-to-do.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListToDoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'To Do List';
}
