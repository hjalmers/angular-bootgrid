import {Component, Input, OnInit} from '@angular/core';
import {ChartObject} from "highcharts";

@Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.scss']
})
export class WidgetChartComponent implements OnInit {
  get resize(): boolean {
    return this._resize;
  }

  @Input() set resize(value: boolean) {
    this._resize = value;
    if(this.chart) {
      this.chart.reflow();
    }
  }

  @Input() classes:string;
  @Input() combo:boolean;
  private _resize:boolean;

  constructor() {
  }

  public chart : ChartObject;
  public options: Object;
  public saveInstance(chartInstance) {
    this.chart = chartInstance;
  }

  ngOnInit() {
    this.options = {
      title : { text : (this.combo ? 'simple combo chart':'simple column chart') + (this.classes ?  ' monochrome ' + this.classes + ' version':'')},
      chart: {
        type: 'column',
        className: this.classes
      },
      credits:false,
      plotOptions: {
        line: { /* or spline, area, series, areaspline etc.*/
          marker: {
            enabled: false
          }
        }
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129],
      },{
        type: this.combo ? 'line':'column',
        data: [21.9, 51.4, 89.1, 53.2],
      },{
        data: [12.5, 73.2, 74.4, 80],
      },{
        type: this.combo ? 'line':'column',
        data: [42.5, 21.2, 87.4, 27],
      }]
    };
  }

}
