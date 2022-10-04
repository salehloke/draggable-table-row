import { createReducer } from '@ngrx/store';
import { addCurrencyPair } from './add-form.action';

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

export const addCurrencyPairReducer = createReducer(
  // supply initialState
  initialState,
  on(addCurrencyPair, (state, { content }) => ({
    ...state,
    currencyPairingList: [state.currencyPairingList, {}],
  }))
);
