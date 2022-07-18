import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
//import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import { User } from 'firebase';
//import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })

  }


  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }


  //form = new FormGroup({
  //  $key: new FormControl(null),
  //  firstName: new FormControl(''),
  //  lastName: new FormControl(''),
  //  email: new FormControl(''),
  //  phoneNumber: new FormControl('')
  //});

}
