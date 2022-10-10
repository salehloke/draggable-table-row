import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { addCurrencyPair, loadCurrencyPairs } from './state/add-form.action';
import { selectAllCurrencyPairs } from './state/add-form.selectors';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrencyPairState } from './state/add-form.reducer';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  public currencyPairs$: Observable<any[]> = this.store.select(
    selectAllCurrencyPairs
  );

  constructor(
    private _location: Location,
    private store: Store<{ currencyPairs: CurrencyPairState }>
  ) {
    // this.currencyPairs$ = store.pipe(select(selectAllCurrencyPairs));
    // this.currencyPairs$ = store.select('currencyPairs');
  }

  ngOnInit() {
    // this.currencyPairingsStore$ = this.store.select(selectAllList);
    this.store.dispatch(loadCurrencyPairs());
    console.log('currencyPairingsStore$', this.currencyPairs$);
    console.log('currencyPairs$', this.currencyPairs$);
    // this.currencyPairs$ = this.store.select('currencyPairs');
  }

  selectedCurrencyFrom: string;

  currencies = [
    { id: 1, currency: 'USD' },
    { id: 2, currency: 'MYR' },
  ];

  addCurrencyPairings() {
    console.log('currencyPairs$', this.currencyPairs$);
    this.store.dispatch(
      addCurrencyPair({ currencyFrom: 'USD', currencyTo: 'MYR' })
    );
  }

  backClicked() {
    this._location.back();
  }
}
