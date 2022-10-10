import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyPair } from './state/add-form.reducer';

@Injectable({ providedIn: 'root' }) // TODO: check this syntax
export class CurrencyPairsService {
  private storageInitialised = false;
  constructor(private storage: Storage, private http: HttpClient) {}

  getCurrencyPairsHTTP() {
    // if (!this.storageInitialised) await this.storage.create();
    // return (await this.storage.get('currencyPairingList')) || [];

    return this.http.get('/currencyPairs');
  }

  async getCurrencyPairs(): Promise<CurrencyPair[]> {
    if (!this.storageInitialised) await this.storage.create();
    return (await this.storage.get('currencyPairingList')) || [];
  }

  async saveCurrencyPairs(currencyPairs: CurrencyPair[]) {
    if (!this.storageInitialised) await this.storage.create();

    return this.storage.set('currencyPairingList', currencyPairs);
  }
}
