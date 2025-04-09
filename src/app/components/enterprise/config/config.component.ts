import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IConfiguration } from '../models/config.interface';
import { ConfigService } from '../services/config.service';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.scss'],
    standalone: true,
    imports: [FormsModule]
})
export class ConfigComponent implements OnInit {
  allow: boolean;

  constructor(private _config: ConfigService, private router: Router) {}

  ngOnInit(): void {
    this.getConfig();
  }

  getConfig() {
    this._config.getConfiguration().subscribe((resp) => {
      this.allow = resp?.allowRegister!;
    });
  }

  changeState() {
    const allow: IConfiguration = { allowRegister: this.allow };
    this._config
      .updateConfiguration(allow)
      .then(() => {
        this.router.navigateByUrl('/enterprise');
      })
      .catch((err) => console.log(err));
  }
}
