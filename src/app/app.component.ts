import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'banner';
  private userData: User;

  constructor() {
    this.userData = {
      accountId: 123456,
      displayName: 'Prasad Palla',
      email: "prasad.palla@outlook.com",
      language: 'English',
      employeeNumber: '123'
    }
  }

}
