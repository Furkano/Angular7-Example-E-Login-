import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/models/user.services';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getAll();
  }

}
