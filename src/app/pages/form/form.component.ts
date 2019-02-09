import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { Cities } from 'src/app/core/models/Cities';
import { Counries } from 'src/app/core/models/Countries';
import { Town } from 'src/app/core/models/Town';
import { UserService } from 'src/app/core/models/user.services';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  user: User = new User();
  cities = new Cities()._Cities;
  countries = new Counries()._Countries;
  _town = Town;
  ilceler: string[] = [];
  il: string;


  onChange(index: number) {

    this.ilceler = this._town.find(p => p.plaka === Number(index)).ilceleri;
  }
  constructor(private userService: UserService) {

  }
  save() {
    this.user.city = this._town.find(o => o.plaka === Number(this.user.city)).il;

    this.userService.save(this.user);
    this.user = new User();
  }
  ngOnInit() {
  }

}

