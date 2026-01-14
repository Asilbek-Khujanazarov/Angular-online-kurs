import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [];
  private nextId = 1;

  add(student: Omit<Student, 'id'>) {
    this.students.push({ id: this.nextId++, ...student });
  }

  getAll(): Student[] {
    return [...this.students];
  }

  update(updated: Student) {
    const index = this.students.findIndex(s => s.id === updated.id);
    if (index !== -1) {
      this.students[index] = updated;
    }
  }

  delete(id: number) {
    this.students = this.students.filter(s => s.id !== id);
  }

  filter(subject?: string, minGrade?: number): Student[] {
    return this.students.filter(s =>
      (!subject || s.subject === subject) &&
      (!minGrade || s.grade >= minGrade)
    );
  }

  averageGrade(): number {
    if (!this.students.length) return 0;
    return this.students.reduce((a, b) => a + b.grade, 0) / this.students.length;
  }

  bestStudent(): Student | null {
    return this.students.reduce((best, cur) =>
      !best || cur.grade > best.grade ? cur : best, null as any);
  }
}
