import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private _auth: AuthService,
    private _toast: ToastrService,
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
        this._toast.error(err);
      });
  }
}
