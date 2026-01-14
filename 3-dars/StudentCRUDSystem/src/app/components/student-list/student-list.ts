import { Component } from '@angular/core';
import { StudentService } from '../../services/student';
import { Student } from '../../models/student.model';
import { StudentCardComponent } from '../student-card/student-card';
import { StudentFormComponent } from '../student-form/student-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [StudentCardComponent, StudentFormComponent,CommonModule],
  templateUrl: './student-list.html'
})
export class StudentListComponent {

  students: Student[] = [];
  selected: Student | null = null;

  constructor(protected service: StudentService) {
    this.refresh();
  }

  refresh() {
    this.students = this.service.getAll();
  }

  save(student: Student) {
    if (student.id) {
      this.service.update(student);
    } else {
      this.service.add(student);
    }
    this.selected = null;
    this.refresh();
  }

  edit(student: Student) {
    this.selected = student;
  }

  delete(id: number) {
    this.service.delete(id);
    this.refresh();
  }
}
