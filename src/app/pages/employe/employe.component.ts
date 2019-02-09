import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/models/user.services';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss']
})
export class EmployeComponent implements OnInit {
  id: number;
  user: User;
  constructor(private activeRoute: ActivatedRoute, private userService: UserService) {
    activeRoute.params.subscribe(data => {
      this.id = data['id'];
      console.log( this.userService.getUser(this.id));
      this.user = this.userService.getUser(this.id);
    }, err => {

    });
  }

  ngOnInit() {


  }

}
