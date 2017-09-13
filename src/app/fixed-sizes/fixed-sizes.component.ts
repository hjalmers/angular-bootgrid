import {Component, OnInit} from '@angular/core';
import {WidgetTableComponent} from "../widget-table/widget-table.component";
import {WidgetChartComponent} from "../widget-chart/widget-chart.component";

@Component({
  selector: 'app-fixed-sizes',
  templateUrl: './fixed-sizes.component.html',
  styleUrls: ['./fixed-sizes.component.scss']
})
export class FixedSizesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.items.map(item=>{
      this.setSize(item, item.itemSize);
    });
  }

  public availableComponents = [
    {
      component: WidgetTableComponent,
      selector: 'widget-table'
    },{
      component: WidgetChartComponent,
      selector: 'widget-chart'
    }];

  sizeRules = {
    sm: {
      size:12,
      smSize:6,
      mdSize:3,
      group:true,
      fs:false
    },
    md: {
      size:12,
      smSize:12,
      mdSize:6,
      group:false,
      fs:false
    },
    lg: {
      size:12,
      smSize:12,
      mdSize:12,
      group:false,
      fs:false
    },
    fs: {
      group:false,
      fs:true
    },
  };

  public items = [{
    smSize: 3,
    componentSelector: 'widget-table',
    extra: 'first',
    startPosition: 0,
    itemSize:'sm'
  }, {
    smSize: 3,
    componentSelector: 'widget-chart',
    extra: 'second',
    startPosition: 1,
    itemSize:'sm'
  }];

  public setSize(item:any, size:string) {
    //const ITEM_TO_UPDATE = {...item};
    item.itemSize = size;

    const RULES = this.sizeRules[size];

    Object.keys(RULES).map(key=> {
      item[key] = RULES[key];
    });
  }
}
