import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-encode',
  templateUrl: './simpleencode.component.html',
  styleUrls: ['./encode.component.css']
})

export class SimpleEncodeComponent implements OnInit {

  public encodedData: TableData;
  public encodedDataWithPrefix: TableData;
  
  constructor() { }

  ngOnInit() {
      this.encodedData = {
          headerRow: [ 'Case Id', 'Event Number', 'Event 1', 'Event 2', 'Event 3', 'Event 4', 'Remaining Time (minutes)'],
          dataRows: [
              ['1', '1', 'A', '0', '0', '0', '180'],
              ['1', '2', 'A', 'B', '0', '0', '120'],
              ['1', '3', 'A', 'B', 'C', '0', '60'],
              ['1', '4', 'A', 'B', 'C', 'D', '0'],
              ['2', '1', 'A', '0', '0', '0', '180'],
              ['2', '2', 'A', 'B', '0', '0', '150'],
              ['2', '3', 'A', 'B', 'A', '0', '110'],
              ['2', '4', 'A', 'B', 'A', 'E', '0']
          ]
      };

      this.encodedDataWithPrefix = {
          headerRow: [ 'Case Id', 'Event Number', 'Event 1', 'Event 2', 'Event 3', 'Remaining Time (minutes)'],
          dataRows: [
              ['1', '3', 'A', 'B', 'C', '60'],
              ['2', '3', 'A', 'B', 'A', '110']
          ]
      };
  }

}
