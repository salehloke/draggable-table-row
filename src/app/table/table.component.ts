import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  dynamicRowList;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // init form array
    this.dynamicRowList = this.fb.array([]);
    const row1 = this.fb.group({
      id: ['_'],
      rowNo: [1],
      first: ['saleh'],
      last: ['loke'],
      handle: ['@salehloke'],
    });
    this.dynamicRowList.push(row1);
  }

  onRowDropped(element: any) {
    console.log('dropped:', element);
  }

  get tableList() {
    return this.dynamicRowList as FormArray;
  }
}
