import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {
  hide = true
  instructorsLoginForm: FormGroup;
  submitted: boolean;
  //formControls = this.instructorsForm.controls;

  constructor() { }

  ngOnInit() {
    this.instructorsLoginForm = new FormGroup({
      $key: new FormControl(null),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
    });
  }


  onSubmit(): void {
    //this.submitted = true
    //if (this.instructorsForm.valid) {
    //  this.submitted = false;
    //}
    console.log(this.instructorsLoginForm.value);
  }

}
