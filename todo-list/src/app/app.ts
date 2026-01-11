import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Todo {
  text: string;
  done: boolean;
}

type Filter = 'all' | 'done' | 'active';
@Component({
  selector: 'app-root',
  imports: [FormsModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  todos: Todo[] = [];
  newTodos: string = '';
  filter: Filter = 'all';

  addTask() {
    this.todos.push({
      text: this.newTodos,
      done: false,
    });

    this.newTodos = '';
  }

  markDone(todo :Todo){
    todo.done =true;
  }
  
  markActive(todo : Todo){
    todo.done = false;
  }

  setFilter(f: Filter) {
    this.filter = f;
  }

  get filteredTodos(): Todo[] {
    switch (this.filter) {
      case 'done':
        return this.todos.filter((x) => x.done);
      case 'active':
        return this.todos.filter((x) => !x.done);
      default:
      return this.todos
    }
  }
}
