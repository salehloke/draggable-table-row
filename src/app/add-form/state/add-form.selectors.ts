import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { CurrencyPairState } from './add-form.reducer';

export const selectPairings = (state: AppState) => state.currencyPairs;

export const selectAllCurrencyPairs = createSelector(
  selectPairings,
  (state: CurrencyPairState) => state.currencyPairs
);
