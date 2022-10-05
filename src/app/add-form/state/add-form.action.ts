import { createAction, props } from '@ngrx/store';
import { CurrencyPairing } from './add-form.reducer';

export const addCurrencyPair = createAction(
  'Add Currency Pair',
  props<{ currencyFrom: string; currencyTo: string }>()
);

export const removeCurrencyPair = createAction(
  'Remove Currency Pair',
  props<{ id: string }>()
);
