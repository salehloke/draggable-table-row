import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  mainForm: FormGroup;
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
    const row2 = this.fb.group({
      id: ['_'],
      rowNo: [2],
      first: ['Jacob'],
      last: ['Thornton'],
      handle: ['@fat'],
    });
    this.mainForm = this.fb.group({
      dynamicRowList: this.dynamicRowList,
    });
    this.dynamicRowList.push(row1);
    this.dynamicRowList.push(row2);
  }

  onRowDropped(event: CdkDragDrop<string[]>) {
    const arr = this.dynamicRowList.controls;
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
  }

  get tableList() {
    return this.dynamicRowList as FormArray;
  }
}
