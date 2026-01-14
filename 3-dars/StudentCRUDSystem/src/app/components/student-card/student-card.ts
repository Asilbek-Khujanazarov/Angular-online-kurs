import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.html'
})
export class StudentCardComponent {

  @Input() student!: Student;
  @Output() edit = new EventEmitter<Student>();
  @Output() delete = new EventEmitter<number>();

  @ViewChild('details') details!: ElementRef<HTMLDivElement>;
  expanded = false;

  toggle() {
    this.expanded = !this.expanded;
    this.details.nativeElement.style.display = this.expanded ? 'block' : 'none';
  }
}
