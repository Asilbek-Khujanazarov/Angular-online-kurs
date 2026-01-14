import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from "./components/student-list/student-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('StudentCRUDSystem');
}
