import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store/src/reducer_creator';
import { addCurrencyPair, removeCurrencyPair } from './add-form.action';

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
  on(addCurrencyPair, (state, { currencyFrom, currencyTo }) => ({
    ...state,
    currencyPairingList: [
      ...state.currencyPairingList,
      { id: Date.now().toString(), currencyFrom, currencyTo },
    ],
  })),
  on(removeCurrencyPair, (state, { id }) => ({
    ...state,
    currencyPairingList: state.currencyPairingList.filter((pair) => pair.id),
  }))
);
