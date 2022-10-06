import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { AddCurrencyPairState } from './add-form.reducer';

export const selectPairings = (state: AppState) => state.addCurrencyPairState;

export const selectAllList = createSelector(
  selectPairings,
  (state: AddCurrencyPairState) => state.currencyPairingList
);
