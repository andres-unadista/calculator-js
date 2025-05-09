import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private _login: AuthService,
    private router: Router,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    this._auth.getAuth().subscribe((auth) => {
      if (auth) {
        this.router.navigateByUrl('enterprise');
      }
    });
  }

  login() {
    this._login
      .login(this.email, this.password)
      .then(() => {
        console.log('LOGIN');
        this.router.navigateByUrl('/enterprise');
      })
      .catch((err: any) => {});
  }
}
