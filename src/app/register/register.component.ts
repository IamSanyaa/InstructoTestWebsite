import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  instructorsForm: FormGroup;
  submitted: boolean;
  //formControls = this.instructorsForm.controls;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  this.instructorsForm = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('')
    });
  }

  onSubmit(): void {
    //this.submitted = true
    //if (this.instructorsForm.valid) {
    //  this.submitted = false;
    //}
    let o = {name:'',email:''};
    o.name = this.instructorsForm.value.firstName;
    o.email = this.instructorsForm.value.email;
    console.log(this.instructorsForm.value);
    let data = this.http.post<any>("https://www.google.com/", o).subscribe(data => {
      console.log(data);
      return data;
      
    })
    this.instructorsForm.reset();
  }

}
