import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private _auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register() {
    this._auth
      .register({ email: this.email, password: this.password })
      .then((data) => {
        this.router.navigate(['enterprise']);
      })
      .catch((err) => {
      });
  }
}
