import {Component, OnInit} from '@angular/core';
import {ChartObject} from "highcharts";
import {BgItem} from '../../bootgrid/components/bg-item';

@Component({
    selector: 'app-widget-chart',
    templateUrl: './widget-chart.component.html',
    styleUrls: ['./widget-chart.component.scss']
})
export class WidgetChartComponent extends BgItem implements OnInit {

    constructor() {
        super();
        console.log('new chart');
    }

    public chart : ChartObject;
    public options: Object;
    public saveInstance(chartInstance) {
        this.chart = chartInstance;

        // subscribe to size changes
        this.size.subscribe( (size:string)=> {
            this.reflowChart();
        });

        // subscribe to focus mode
        this.focus.subscribe( (focus:boolean)=> {
            this.reflowChart();
        })
    }

    ngOnInit() {
        this.options = {
            title : { text : 'simple column chart'},
            chart: {
                type: 'column'
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
                type: 'column',
                data: [21.9, 51.4, 89.1, 53.2],
            },{
                data: [12.5, 73.2, 74.4, 80],
            },{
                type: 'column',
                data: [42.5, 21.2, 87.4, 27],
            }]
        };
    }

    reflowChart() {
        setTimeout(()=> this.chart.reflow(),0);
    }

}
