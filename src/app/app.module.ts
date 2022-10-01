import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
  ],
  declarations: [AppComponent, HelloComponent, TableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
