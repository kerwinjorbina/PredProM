import { Component, OnInit } from '@angular/core';
import { LogDataComponent } from './logdata.component';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-encode',
  templateUrl: './booleanencode.component.html',
  styleUrls: ['./encode.component.css']
})
export class BooleanEncodeComponent implements OnInit {
  public encodedData: TableData;
  public encodedDataWithPayload: TableData;

  constructor() { }

  ngOnInit() {
      this.encodedData = {
          headerRow: [ 'Case Id', 'Event Number', 'A', 'B', 'C', 'D', 'E', 'Remaining Time (minutes)'],
          dataRows: [
              ['1', '1', '1', '0', '0', '0', '0', '180'],
              ['1', '2', '1', '1', '0', '0', '0', '120'],
              ['1', '3', '1', '1', '1', '0', '0', '60'],
              ['1', '4', '1', '1', '1', '1', '0', '0'],
              ['2', '1', '1', '0', '0', '0', '0', '180'],
              ['2', '2', '1', '1', '0', '0', '0', '150'],
              ['2', '3', '1', '1', '0', '0', '0', '110'],
              ['2', '4', '1', '1', '1', '0', '1', '0']
          ]
      };

      this.encodedDataWithPayload = {
          headerRow: [ 'Case Id', 'Event Number', 'A', 'B', 'C', 'D', 'E', '1', '2', '3', '4', '5', '6', 'Remaining Time (minutes)'],
          dataRows: [
              ['1', '1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '180'],
              ['1', '2', '1', '1', '0', '0', '0', '1', '1', '0', '0', '0', '0', '120'],
              ['1', '3', '1', '1', '1', '0', '0', '1', '1', '1', '0', '0', '0', '60'],
              ['1', '4', '1', '1', '1', '1', '0', '1', '1', '1', '1', '0', '0', '0'],
              ['2', '1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '180'],
              ['2', '2', '1', '1', '0', '0', '0', '1', '1', '0', '0', '0', '0', '150'],
              ['2', '3', '1', '1', '0', '0', '0', '1', '1', '0', '0', '0', '1', '110'],
              ['2', '4', '1', '1', '1', '0', '1', '1', '1', '0', '0', '1', '0', '0']
          ]
      };
  }

}
