import { createReducer, on } from '@ngrx/store';
// import { on } from '@ngrx/store';
import {
  addCurrencyPair,
  loadCurrencyPairs,
  removeCurrencyPair,
  loadCurrencyPairsSuccess,
  loadCurrencyPairsFailure,
} from './add-form.action';

export interface CurrencyPairState {
  currencyPairs: CurrencyPair[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: CurrencyPairState = {
  currencyPairs: [],
  error: null,
  status: 'pending',
};

export interface CurrencyPair {
  id: string;
  currencyFrom: string;
  currencyTo: string;
}

export const currencyPairReducer = createReducer(
  // supply initialState
  initialState,
  // adding new currency pairs
  on(addCurrencyPair, (state, { currencyFrom, currencyTo }) => ({
    ...state,
    currencyPairs: [
      ...state.currencyPairs,
      { id: Date.now().toString(), currencyFrom, currencyTo },
    ],
  })),
  // remove currency pair
  on(removeCurrencyPair, (state, { id }) => ({
    ...state,
    currencyPairs: state.currencyPairs.filter((pair) => pair.id),
  })),
  // trigger loading
  on(loadCurrencyPairs, (state) => ({ ...state, status: 'loading' })),
  // handle successfull loading currency pairs
  on(loadCurrencyPairsSuccess, (state, { currencyPairs }) => ({
    ...state,
    currencyPairs: currencyPairs,
    error: null,
    status: 'success',
  })),
  // handle error on loading currency pairs
  on(loadCurrencyPairsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
