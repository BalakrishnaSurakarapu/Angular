import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  companyRegistrationForm!: FormGroup;
  emailForm!: FormGroup;
  genderOptions = ['Male', 'Female', 'Other'];

  createAddress(): FormGroup {
    return this.formBuilder.group({
      type: ['', Validators.required],
      houseNo: ['', Validators.required],
      street: ['', Validators.required],
      landmark: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
  }

  constructor(private formBuilder: FormBuilder) {
    this.companyRegistrationForm = this.formBuilder.group({
      companyname:['',Validators.required],
      companyregistrationno:['',Validators.required],
      email: ['', Validators.required, Validators.email],
      addresses: this.formBuilder.array([this.createAddress()]),
      emails: this.formBuilder.array([this.createEmail()]),
      gender: ['', Validators.required],
      username: ['', Validators.required],
      dob: ['', Validators.required],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      middlename: [''],
    });

  }
  ngOnInit(): void {
    // this.formBuilder.array([]),
    //   this.formBuilder.array([this.createAddress()]);
      
  }
  get addresses(): FormArray {
    return this.companyRegistrationForm.get('addresses') as FormArray;
  }
  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }
  addAddress(): void {debugger
    this.addresses.push(this.createAddress());
  }

  get hrDetails(): FormArray {
    return this.companyRegistrationForm.get('hrDetails') as FormArray;
  }
  createEmail(): FormGroup {
    return this.formBuilder.group({
     email: ['', [Validators.required, Validators.email]]
    });
  }
  get emails(): FormArray {
    return this.companyRegistrationForm.get('emails') as FormArray;
  }
  addEmail(): void {
    this.emails.push(this.createEmail());
  }
  removeEmail(index: number): void {
    this.emails.removeAt(index);
  }
  onSubmit(): void {debugger
    console.log(this.companyRegistrationForm.value);
  }
}
