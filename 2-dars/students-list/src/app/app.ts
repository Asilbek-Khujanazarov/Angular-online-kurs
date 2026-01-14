import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  name: string;
  score: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports:[FormsModule]
})
export class App {
  students: Student[] = [];

  name: string = '';
  score: number | null = null;

  addStudent() {
    if (!this.name || this.score === null) return;

    this.students.push({
      name: this.name,
      score: this.score,
    });

    this.name = '';
    this.score = null;
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

  getScoreClass(score: number): string {
    if (score >= 90) return 'green';
    if (score >= 60) return 'yellow';
    return 'red';
  }
}
