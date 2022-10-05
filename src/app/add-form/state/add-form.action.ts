import { createAction, props } from '@ngrx/store';

export const addCurrencyPair = createAction(
  'Add Currency Pair',
  props<{ content: string }>()
);

export const removeCurrencyPair = createAction(
  'Remove Currency Pair',
  props<{ content: string }>()
);
