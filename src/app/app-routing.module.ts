import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { TableComponent } from './table/table.component';
import { AddFormComponent } from './add-form/add-form.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  {
    path: 'add-form',
    component: AddFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
