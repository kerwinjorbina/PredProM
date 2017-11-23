import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-encode',
  templateUrl: './complexencode.component.html',
  styleUrls: ['./encode.component.css']
})

export class ComplexEncodeComponent implements OnInit {

  public encodedData: TableData;
  public encodedDataWithPrefix: TableData;
  
  constructor() { }

  ngOnInit() {
      this.encodedData = {
          headerRow: [ 'Case Id', 'Event Number', 'Event 1', 'Resource 1', 'Event 2', 'Resource 2', 'Event 3', 'Resource 3', 'Event 4', 'Resource 4', 'Remaining Time (minutes)'],
          dataRows: [
              ['1', '1', 'A', '1', '0', '0', '0', '0', '0', '0', '180'],
              ['1', '2', 'A', '1', 'B', '2', '0', '0', '0', '0', '120'],
              ['1', '3', 'A', '1', 'B', '2', 'C', '3', '0', '0', '60'],
              ['1', '4', 'A', '1', 'B', '2', 'C', '3', 'D', '4', '0'],
              ['2', '1', 'A', '1', '0', '0', '0', '0', '0', '0', '180'],
              ['2', '2', 'A', '1', 'B', '2', '0', '0', '0', '0', '150'],
              ['2', '3', 'A', '1', 'B', '2', 'A', '6', '0', '0', '110'],
              ['2', '4', 'A', '1', 'B', '2', 'A', '6', 'E', '5', '0']
          ]
      };

      this.encodedDataWithPrefix = {
          headerRow: [ 'Case Id', 'Event Number', 'Event 1', 'Resource 1', 'Event 2', 'Resource 2', 'Event 3', 'Resource 3', 'Remaining Time (minutes)'],
          dataRows: [
              ['1', '3', 'A', '1', 'B', '2', 'C', '3', '60'],
              ['2', '3', 'A', '1', 'B', '2', 'A', '6', '110']
          ]
      };
  }

}
