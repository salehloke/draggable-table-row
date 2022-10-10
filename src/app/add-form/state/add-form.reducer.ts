import { createReducer, on } from '@ngrx/store';
// import { on } from '@ngrx/store';
import {
  addCurrencyPair,
  loadCurrencyPairs,
  removeCurrencyPair,
  loadCurrencyPairsSuccess,
  loadCurrencyPairsFailure,
} from './add-form.action';

export interface AddCurrencyPairState {
  currencyPairingList: CurrencyPairing[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: AddCurrencyPairState = {
  currencyPairingList: [],
  error: null,
  status: 'pending',
};

export interface CurrencyPairing {
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
    currencyPairingList: [
      ...state.currencyPairingList,
      { id: Date.now().toString(), currencyFrom, currencyTo },
    ],
  })),
  // remove currency pair
  on(removeCurrencyPair, (state, { id }) => ({
    ...state,
    currencyPairingList: state.currencyPairingList.filter((pair) => pair.id),
  })),
  // trigger loading
  on(loadCurrencyPairs, (state) => ({ ...state, status: 'loading' })),
  // handle successfull loading currency pairs
  on(loadCurrencyPairsSuccess, (state, { currencyPairingList }) => ({
    ...state,
    currencyPairingList: currencyPairingList,
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
