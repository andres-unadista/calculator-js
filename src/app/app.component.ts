import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-mean-products';

  ngOnInit() {
    firebase.initializeApp(environment.firebaseConfig);
  }
}
