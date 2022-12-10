import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project';

  public details: any = [
    { id: 0, name: 'Rahul ', mobileNo: 9001234566 },
    { id: 1, name: 'Kavya ', mobileNo: 9012345678 },
    { id: 2, name: 'Chandan ', mobileNo: 9812345678 },
    { id: 3, name: 'Prashant ', mobileNo: 8912345678 },
    { id: 4, name: 'Amit ', mobileNo: 7010209640 },
  ];

  public onClick(val: any) {
    this.details = this.details.filter((detail: any) => detail.id !== val.id);
  }
}
