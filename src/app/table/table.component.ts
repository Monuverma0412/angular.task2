import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit  {

  users: any[] = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
  ];

  ngOnInit() {
    this.loadDataFromLocalStorage();
    setInterval(() => {
      this.loadDataFromLocalStorage();
    }, 1000);
  }

  loadDataFromLocalStorage(): void {
    const existingUserDataString = localStorage.getItem('userDataArray');
    this.users = existingUserDataString ? JSON.parse(existingUserDataString) : [];
  }

  saveDataToLocalStorage(): void {
    localStorage.setItem('userDataArray', JSON.stringify(this.users));
  }

  deleteData(index: number): void {
    if (index >= 0 && index < this.users.length) {
      this.users.splice(index, 1);

      this.saveDataToLocalStorage();
    }
  }
}
