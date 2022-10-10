import { createAction, props } from '@ngrx/store';
import { CurrencyPair } from './add-form.reducer';

export const addCurrencyPair = createAction(
  'Add Currency Pair',
  props<{ currencyFrom: string; currencyTo: string }>()
);

export const removeCurrencyPair = createAction(
  'Remove Currency Pair',
  props<{ id: string }>()
);

export const loadCurrencyPairs = createAction('Load Currency Pairs');

export const loadCurrencyPairsSuccess = createAction(
  'Load Currency Pairs Success',
  props<{ currencyPairs: CurrencyPair[] }>()
);

export const loadCurrencyPairsFailure = createAction(
  'Load Currency Pairs Failure',
  props<{ error: string }>()
);
