//import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token: string | null;
  userData: any; // Save logged in user data

  constructor(private router: Router) {}

  login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        return firebase.auth().currentUser!.getIdToken();
      })
      .then((token) => {
        this.token = token;
        console.log('token obtenido:' + this.token);
        this.router.navigate(['/budget']);
      })
      .catch((err) => console.error(err));
  }

  getIdToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    console.log('logout');
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.token = null;
        console.log('dentro de signout');
        this.router.navigate(['/budget/login']);
      })
      .catch((error) => console.log(error));
  }
}
