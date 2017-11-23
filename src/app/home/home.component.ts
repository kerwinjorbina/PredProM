import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public eventChartType: ChartType;
    public eventChartData: any;
    public eventChartLegendItems: LegendItem[];

    public tracesChartType: ChartType;
    public tracesChartData: any;
    public tracesChartOptions: any;
    public tracesChartResponsive: any[];
    public tracesChartLegendItems: LegendItem[];

    public resourcesChartType: ChartType;
    public resourcesChartData: any;
    public resourcesChartOptions: any;
    public resourcesChartResponsive: any[];
    public resourcesChartLegendItems: LegendItem[];

    public logName: string;
    public logTraceCount: number;
    public logEventCount: number;
    public logResourceCount: number;

  constructor() { }

  ngOnInit() {
      // events
      this.eventChartType = ChartType.Pie;
      this.eventChartData = {
        labels: ['62%', '32%', '6%'],
        series: [62, 32, 6]
      };
      this.eventChartLegendItems = [
        { title: 'Open', imageClass: '' },
        { title: 'Bounce', imageClass: '' },
        { title: 'Unsubscribe', imageClass: '' }
      ];

      // daily trace count
      this.tracesChartType = ChartType.Line;
      this.tracesChartData = {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
        series: [
          [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
          [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
          [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
        ]
      };
      this.tracesChartOptions = {
        low: 0,
        high: 800,
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: false,
        },
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 3
        }),
        showLine: false,
        showPoint: false,
      };
      this.tracesChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.tracesChartLegendItems = [
        { title: 'Open', imageClass: 'fa fa-circle text-info' },
        { title: 'Click', imageClass: 'fa fa-circle text-danger' },
        { title: 'Click Second Time', imageClass: 'fa fa-circle text-warning' }
      ];

      this.resourcesChartType = ChartType.Line;
      this.resourcesChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
        ]
      };
      this.resourcesChartOptions = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      };
      this.resourcesChartResponsive = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.resourcesChartLegendItems = [
        { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
        { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
      ];

      this.logName = "Log Name";
      this.logTraceCount = 0;
      this.logEventCount = 0;
      this.logResourceCount = 0;
    }

}
