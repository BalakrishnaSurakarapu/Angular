import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from './user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  selecteduser: any;
  userForm: FormGroup;
  userId: number | null = null;

  users: User[] = [];

  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.userForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    debugger

    this.userservice.getUsers().subscribe(data => {
      this.users = data;
      console.log('Loaded users:', this.users);
    });
    }

  editUser(user: User): void {
    this.userId = user.userId; // Set userId for the form
    this.userForm.patchValue(user); // Load user data into the form
  }

  onSubmit(): void {
    debugger
    if (this.userForm.valid) {
      const user = this.userForm.value;
      if (this.userId) {
        user.userId = this.userId; // Ensure the userId is set
        this.userservice.updateUser(user).subscribe(
          (updatedUsers) => {
            this.users = updatedUsers;
            alert('User updated successfully!');
            this.userForm.reset();
          },
          error => {
            alert('An error occurred while updating the user.');
            console.error(error);
          }
        );
        this.userForm.reset();
      } else {
        this.userservice.addUser(user).subscribe(
          (newUsers) => {
            this.users = newUsers;
            alert('User added successfully!');
            this.userForm.reset();
          },
          error => {
            alert('An error occurred while adding the user.');
            console.error(error);
          }
        );
      }
      this.userForm.reset();
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
 
  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userservice.deleteUser(userId).subscribe(
        (updatedUsers) => {
          this.users = updatedUsers;
          alert('User deleted successfully!');
          this.userForm.reset();
        },
        error => {
          alert('An error occurred while deleting the user.');
          console.error(error);
        }
      );
    }
  }
}