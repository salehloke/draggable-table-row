import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { AddCurrencyPairState } from './add-form.reducer';

export const selectPairings = (state: AppState) => state.currencyPairs;

export const selectAllList = createSelector(
  selectPairings,
  (state: AddCurrencyPairState) => state.currencyPairingList
);
