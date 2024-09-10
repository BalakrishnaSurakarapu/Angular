import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  title = 'CompanyRegistration';
  registrationForm!: FormGroup;
  submittedData: any;
  constructor(private fb:FormBuilder){
    this.registrationForm = this.fb.group({
      companyName: ['', Validators.required],
      companyRegistrationNo: ['', Validators.required],
      addresses: this.fb.array([this.createAddress()]),
      hrDetails: this.fb.array([this.createHrDetail()]),
     emails: this.fb.array([this.createEmail()])
    });

  }
  ngOnInit(): void {
  }
  get addresses(): FormArray {
    return this.registrationForm.get('addresses') as FormArray;
  }
  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }
  addAddress(): void {
    this.addresses.push(this.createAddress());
  }
  createAddress(): FormGroup {
    return this.fb.group({
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
  createHrDetail(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      username: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }
  get hrDetails(): FormArray {
    return this.registrationForm.get('hrDetails') as FormArray;
  }
  addHrDetail(): void {
    this.hrDetails.push(this.createHrDetail());
  }
  removeHrDetail(index: number): void {
    this.hrDetails.removeAt(index);
  }

  createEmail(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get emails(): FormArray {
    return this.registrationForm.get('emails') as FormArray;
  }
  addEmail(): void {
    this.emails.push(this.createEmail());
  }
  removeEmail(index: number): void {
    this.emails.removeAt(index);
  }
  onSubmit(): void {
    console.log(this.registrationForm.value);
    this.submittedData = this.registrationForm.value;
  }


  // someMethod(answer: string) {
  //   alert(`You clicked ${answer}`);
  // }


  showHearts = false;
  showOkay = false;
  hearts = new Array(10).fill(0); // Adjust the number of hearts as needed

  someMethod(answer: string) {
    if (answer === 'Yes') {
      console.log(answer,'buttonclick')
      this.showHearts = true;
      this.showOkay = false;

      // Hide hearts after 2 seconds
      setTimeout(() => {
        this.showHearts = false;
      }, 2000);
    } else {
      this.showHearts = false;
      this.showOkay = true;

      // Hide "Okay" after 2 seconds
      setTimeout(() => {
        this.showOkay = false;
      }, 2000);
    }
  }
}
