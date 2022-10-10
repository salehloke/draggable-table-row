import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getCurrencyPairsDummyData(): Observable<CurrencyPair[]> {
    return new Observable((subscriber) => {
      const pair1: CurrencyPair = {
        id: Date.now().toLocaleString(),
        currencyFrom: 'MYR',
        currencyTo: 'USD',
      };
      const pair2: CurrencyPair = {
        id: Date.now().toLocaleString(),
        currencyFrom: 'USD',
        currencyTo: 'IDR',
      };

      const data: CurrencyPair[] = [pair1, pair2];

      subscriber.next(data);
      subscriber.complete();
    });
  }

  async saveCurrencyPairs(currencyPairs: CurrencyPair[]) {
    if (!this.storageInitialised) await this.storage.create();

    return this.storage.set('currencyPairingList', currencyPairs);
  }
}
