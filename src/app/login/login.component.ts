import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  nameExist: boolean = true; 
  passwordExist: boolean = true;

  login(email: string, password: string): void {
    if (this.nameExist && this.passwordExist) {
      const existingUserDataString = localStorage.getItem('userDataArray');
      let userDataArray: any[] = existingUserDataString ? JSON.parse(existingUserDataString) : [];

      const isDuplicate = userDataArray.some(user => user.email === email);

      if (!isDuplicate) {
        alert('Logging in with email and password');
  
        const currentUserData = {
          email: email,
          password: password 
        };
        userDataArray.push(currentUserData);

        localStorage.setItem('userDataArray', JSON.stringify(userDataArray));
      } else {
        alert('User with the same email already exists in local storage.');
      }
    } else {
      alert('Both email and password are required');
    }
  }

  
}
