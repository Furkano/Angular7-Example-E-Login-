import { Component, OnInit } from '@angular/core';
import { Cities } from 'src/app/core/models/Cities';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
  _cities = new Cities()._Cities;
  form = JSON.stringify(this._cities);

  states = [
    { name: 'Arizona', abbrev: 'AZ' },
    { name: 'California', abbrev: 'CA' },
    { name: 'Colorado', abbrev: 'CO' },
    { name: 'New York', abbrev: 'NY' },
    { name: 'Pennsylvania', abbrev: 'PA' },
  ];
  fform = new FormGroup({
    state: new FormControl(this.states)
  });

  ngOnInit() {
  }

}
