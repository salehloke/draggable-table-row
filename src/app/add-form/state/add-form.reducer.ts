import { createReducer } from '@ngrx/store';
import { addCurrencyPair, removeCurrencyPair } from './add-form.action';

export interface AddCurrencyPairState {
  currencyPairingList: [];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: AddCurrencyPairState = {
  currencyPairingList: [],
  error: null,
  status: 'pending',
};

export const currencyPairReducer = createReducer(
  // supply initialState
  initialState,
  on(addCurrencyPair, (state, { content }) => ({
    ...state,
    currencyPairingList: [state.currencyPairingList, { content: content }],
  })),
  on(removeCurrencyPair, (state, { content }) => ({
    ...state,
    currencyPairingList: [state.currencyPairingList, { content: content }],
  }))
);
