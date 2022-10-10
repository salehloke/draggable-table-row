import { Injectable } from '@angular/core';
import { CurrencyPairing } from './state/add-form.reducer';

@Injectable({ providedIn: 'root' }) // TODO: check this syntax
export class CurrencyPairsService {
  private storageInitialised = false;
  constructor(private storage: Storage) {}

  async getCurrencyPairs(): Promise<CurrencyPairing[]> {
    if (!this.storageInitialised) await this.storage.create();
    return (await this.storage.get('currencyPairingList')) || [];
  }

  async saveCurrencyPairs(currencyPairs: CurrencyPairing[]) {
    if (!this.storageInitialised) await this.storage.create();

    return this.storage.set('currencyPairingList', currencyPairs);
  }
}
