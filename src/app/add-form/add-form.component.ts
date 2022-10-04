import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  constructor(private _location: Location) {}

  ngOnInit() {}

  selectedCurrencyFrom: string;

  currencies = [
    { id: 1, currency: 'USD' },
    { id: 2, currency: 'MYR' },
  ];

  backClicked() {
    this._location.back();
  }
}
