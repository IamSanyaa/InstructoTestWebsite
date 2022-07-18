import { SPACE, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';


export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-lf-instructor',
  templateUrl: './lf-instructor.component.html',
  styleUrls: ['./lf-instructor.component.scss']
})
export class LfInstructorComponent {

  avatar = './assets/batman-icon.png';
  instructorsList: any[] = [
    { name: 'Dan', lastName:'Toshev', city:'Sofia', gender: 'Male' },
    { name: 'Gosho', lastName:'Peshev', city:'Varna', gender: 'Male' },
    { name: 'Danka', lastName:'Mecheva', city:'Smolyan', gender: 'Female' },
    { name: 'Penka', lastName:'Gancheva', city:'Stara Zagora', gender: 'Female' },
    { name: 'Alex', lastName:'Dimchev', city:'Kirovo', gender: 'Male' },
    
  ];

  displayedColumns: string[] = ['name', 'lastName', 'city', 'gender'];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, SPACE];
  fruits: Fruit[] = [

  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }


//  constructor() {
//  this.instructorsList = [

//];
//  }

 
}
