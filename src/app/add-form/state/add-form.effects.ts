import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect} from "@ngrx/effects";
import { AppState } from "../../app.state";
import { CurrencyPairsService } from "../currency-pairs.service";
import { loadCurrencyPairs, loadCurrencyPairsFailure, loadCurrencyPairsSuccess } from "./add-form.action";
import { switchMap, from, catchError,  } from "rxjs";


@Injectable()
export class CurrencyPairsEffects{
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private currencyPairsService: CurrencyPairsService
    ){
  }


  loadcurrencyPairs$ = createEffect(()=>
  this.actions$.pipe(
    ofType(loadCurrencyPairs),
    switchMap(()=>
    // call the get Curerncy pairs method, convert it to an observable
    from(this.currencyPairsService.getCurrencyPairs()).pipe(
      map((currencyPairs)=> loadCurrencyPairsSuccess({currencyPairs: currencyPairs})),
      catchError((error)=>of(loadCurrencyPairsFailure))
    )
    )
  )
  )
}