import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetTableComponent} from "../widget-table/widget-table.component";
import {WidgetChartComponent} from "../widget-chart/widget-chart.component";
import {BootgridComponent} from '../../bootgrid/components/bootgrid.component';

@Component({
  selector: 'app-fixed-sizes',
  templateUrl: './fixed-sizes.component.html',
  styleUrls: ['./fixed-sizes.component.scss']
})
export class FixedSizesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.items.map(item=>{
      this.myGrid.setSize(item, item.itemSize);
    });
  }

  @ViewChild(BootgridComponent)
  public myGrid: any;
  public availableComponents = [
    {
      component: WidgetTableComponent,
      selector: 'widget-table'
    },{
      component: WidgetChartComponent,
      selector: 'widget-chart'
    }];



  public items = [{
    componentSelector: 'widget-table',
    extra: 'first',
    startPosition: 0,
    itemSize:'md'
  }, {
    componentSelector: 'widget-chart',
    extra: 'second',
    startPosition: 1,
    itemSize:'md'
  }];


}
