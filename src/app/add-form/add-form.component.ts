import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { addCurrencyPair, loadCurrencyPairs } from './state/add-form.action';
import { selectAllCurrencyPairs } from './state/add-form.selectors';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  currencyPairingsStore$: Observable<any[]> = this.store.select(
    selectAllCurrencyPairs
  );

  constructor(private _location: Location, private store: Store) {}

  ngOnInit() {
    // this.currencyPairingsStore$ = this.store.select(selectAllList);
    this.store.dispatch(loadCurrencyPairs());
    console.log('currencyPairingsStore$', this.currencyPairingsStore$);
  }

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
