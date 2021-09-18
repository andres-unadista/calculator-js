import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authService: AngularFireAuth) {}

  login(email: string, password: string) {
    return this.authService.signInWithEmailAndPassword(email, password);
  }

  getAuth() {
    return this.authService.authState.pipe(map((auth) => auth));
  }

  register({ email, password }: { email: string; password: string }) {
    return new Promise((resolve, reject) => {
      this.authService
        .createUserWithEmailAndPassword(email, password)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  logout() {
    this.authService.signOut();
  }
}
