import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { addCurrencyPair } from './state/add-form.action';
import { selectAllList } from './state/add-form.selectors';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  currencyPairings$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  currencyPairingsStore$: Observable<any[]>;

  constructor(private _location: Location, private store: Store) {
    this.currencyPairingsStore$ = this.store.select(selectAllList);
  }

  ngOnInit() {}

  selectedCurrencyFrom: string;

  currencies = [
    { id: 1, currency: 'USD' },
    { id: 2, currency: 'MYR' },
  ];

  addCurrencyPairings() {
    console.log();
    this.store.dispatch(
      addCurrencyPair({ currencyFrom: 'usd', currencyTo: 'myr' })
    );
  }

  backClicked() {
    this._location.back();
  }
}
