import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [RouterModule, HeaderComponent, FooterComponent],
  standalone: true,
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
