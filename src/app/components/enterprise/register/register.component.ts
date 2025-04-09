import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  _toast: ToastrService = inject(ToastrService);

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
        this._toast.error(err);
      });
  }
}
