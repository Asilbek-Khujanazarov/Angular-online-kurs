import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/student.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule],
  templateUrl: './student-form.html'
})
export class StudentFormComponent {

  @Input() student: Student | null = null;
  @Output() save = new EventEmitter<Student>();

  model: Student = { id: 0, name: '', subject: '', grade: 0 };

  ngOnChanges() {
    if (this.student) {
      this.model = { ...this.student };
    }
  }

  submit() {
    if (!this.model.name || !this.model.subject || this.model.grade < 0 || this.model.grade > 100) {
      alert('Formani to‘g‘ri to‘ldiring!');
      return;
    }
    this.save.emit(this.model);
    this.model = { id: 0, name: '', subject: '', grade: 0 };
  }
}
