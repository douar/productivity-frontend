import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productivity-frontend';

  isLoggedIn:boolean = false
  createAccount:boolean = false
  constructor() {
  }
}
