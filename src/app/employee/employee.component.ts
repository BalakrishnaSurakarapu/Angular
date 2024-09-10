import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  selectedEmployee: any;
  employeeForm!: FormGroup;
  employeeId?: number;

  highestEmployeeId: number = 0;
  employees = [
    {
      employeeId: 1,
      employeeName: 'John Doe',
      department: 'HR',
      designation: 'Manager',
      contactNumber: '1234567890',
      dateOfJoin: '2023-01-15'
    },
    {
      employeeId: 2,
      employeeName: 'Jane Smith',
      department: 'IT',
      designation: 'Developer',
      contactNumber: '0987654321',
      dateOfJoin: '2023-02-20'
    },
    {
      employeeId: 3,
      employeeName: 'Balu',
      department: 'IT',
      designation: 'Developer',
      contactNumber: '7732087304',
      dateOfJoin: '2023-02-25'
    }
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.calculateHighestEmployeeId();
    this.form();

  }
  form() {
    this.employeeForm = this.fb.group({
      employeeId: [''],
      employeeName: ['', Validators.required],
      department: ['', Validators.required],
      designation: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dateOfJoin: ['', Validators.required]
    });
  }
  calculateHighestEmployeeId(): void {
    if (this.employees.length > 0) {
      this.highestEmployeeId = Math.max(...this.employees.map(emp => emp.employeeId));
    } else {
      this.highestEmployeeId = 0;
    }
  }
  onSubmit(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }
    if (this.employeeForm.valid) {
      if (this.selectedEmployee) {
        // Update existing employee
        const index = this.employees.findIndex(emp => emp.employeeId === this.selectedEmployee.employeeId);
        if (index !== -1) {
          this.employees[index] = this.employeeForm.value;
          alert('Employee updated successfully!');
        }
        this.selectedEmployee = null;
      } else {
        const newEmployeeId = this.highestEmployeeId + 1;
        const newEmployee = { ...this.employeeForm.value, employeeId: newEmployeeId };

        // Add new employee to the list
        this.employees.push(newEmployee);
        this.highestEmployeeId = newEmployeeId; // Update the highestEmployeeId

        alert('Employee added successfully!');
      }
      this.employeeForm.reset();
    } else {
      alert('Please fill in all fields correctly.');
    }
  }

  editEmployee(employee: any): void {
    this.selectedEmployee = employee;
    this.employeeForm.patchValue(employee);

    // this.employeeForm.patchValue(employee.value.id);
    // this.employeeForm.patchValue(employee.value.employeeName);
    // this.employeeForm.patchValue(employee.value.department);
    // this.employeeForm.patchValue(employee.value.designation);
    // this.employeeForm.patchValue(employee.value.contactNumber)  
    // this.employeeForm.patchValue(employee.value.dateOfJoin)
  }


  deleteEmployee(employeeId: number): void {
    this.employees = this.employees.filter(emp => emp.employeeId !== employeeId);
    this.employeeForm.reset();
  }
}