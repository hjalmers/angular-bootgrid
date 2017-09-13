import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RandomWidgetComponent } from './random-widget/random-widget.component';
import { BasicComponent } from './basic/basic.component';
import { BootgridModule } from "../bootgrid/bootgrid.module";
import { CardComponent } from './card/card.component';
import { ExamplesComponent } from './examples/examples.component';
import { AppRoutingModule } from './app-routing.module';
import { ExemplifyModule } from "angular-exemplify";
import { FixedSizesComponent } from './fixed-sizes/fixed-sizes.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { WidgetTableComponent } from './widget-table/widget-table.component';
import {GenericTableModule} from "@angular-generic-table/core";
import * as highcharts from 'highcharts';
import {HighchartsStatic} from "angular2-highcharts/dist/HighchartsService";
import { WidgetChartComponent } from './widget-chart/widget-chart.component';
import {ChartModule} from "angular2-highcharts";
export function highchartsFactory() {
  return highcharts;
}


@NgModule({
  declarations: [
    AppComponent,
    RandomWidgetComponent,
    BasicComponent,
    CardComponent,
    ExamplesComponent,
    FixedSizesComponent,
    WidgetTableComponent,
    WidgetChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BootgridModule,
    ExemplifyModule,
    GenericTableModule,
    ChartModule,
    NgbModule.forRoot()
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory,
    }
  ],
  entryComponents: [
    RandomWidgetComponent,
    WidgetTableComponent,
    WidgetChartComponent
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
