import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { currencyPairReducer } from './add-form/state/add-form.reducer';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgSelectModule,
    StoreModule.forRoot({ addCurrencyPairing: currencyPairReducer }),
  ],
  declarations: [AppComponent, HelloComponent, TableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
