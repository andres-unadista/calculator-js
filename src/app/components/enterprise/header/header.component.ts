import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ConfigService } from '../services/config.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  isAllowRegister: boolean;

  constructor(
    private _auth: AuthService,
    private router: Router,
    private _config: ConfigService
  ) {}

  ngOnInit(): void {
    this.auth();
    this.getConfig();
  }

  getConfig() {
    this._config.getConfiguration().subscribe((resp) => {
      this.isAllowRegister = resp?.allowRegister!;
    });
  }

  auth() {
    this._auth.getAuth().subscribe((auth) => {
      if (auth) {
        console.log(auth);
        this.isLoggedIn = true;
        this.loggedInUser = auth.email!;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  logout() {
    this._auth.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('/enterprise/login');
  }
}
