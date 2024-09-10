import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from './student.Model';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  studentData: any;
  currentStudent: any = { id: '', name: '', email: '', gender: 'male' };
  isEditing: boolean = false;
  editMode: boolean = false;
  isAdding: boolean = false;
  constructor(private Student: StudentService) { }

  ngOnInit(): void {
    this.get();    
  }

  get(){
    this.Student.getStudents().subscribe(
      (data) => {
        this.studentData = data;
        console.dir( this.studentData, 'data')
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  showAddForm(): void {
    this.currentStudent = { id: 0, name: '', email: '', gender: 'male' }; // Reset form for new entry
    this.isAdding = true;
    this.isEditing = false;
  }

  showEditForm(student: Student): void {
    this.currentStudent = { ...student };
    this.isAdding = false;
    this.isEditing = true;
  }
  addStudent(): void {
    const newId = this.studentData.length ? Math.max(...this.studentData.map((s: Student) => s.id)) + 1 : 1;
    this.currentStudent.id = newId;
    this.studentData.push({ ...this.currentStudent });
    this.resetForm();
  }

  updateStudent(): void {
    const index = this.studentData.findIndex((s: Student) => s.id === this.currentStudent.id);
    if (index > -1) {
      this.studentData[index] = { ...this.currentStudent };
    }
    this.resetForm();
  }
  deleteStudent(index: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentData.splice(index, 1);
    }
  }
  onSubmit(): void {
    if (this.isEditing) {
      this.updateStudent(); 
    } else if (this.isAdding) {
      this.addStudent();
    }
  }
  cancelEdit(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.currentStudent = { id: '', name: '', email: '', gender: 'male' };
    this.isEditing = false;
  }
}

