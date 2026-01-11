import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected value = signal(0);

  protected increment() {
    this.value.update((v) => v + 1);
  }

  protected decrement() {
    this.value.update((v) => v - 1);
  }
}
