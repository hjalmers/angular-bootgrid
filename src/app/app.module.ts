import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DragulaModule} from 'ng2-dragula/ng2-dragula';
import {ResizableModule} from 'angular-resizable-element';
import { BgColumnComponent } from './bg-column/bg-column.component';
import { BgWidgetComponent } from './bg-widget/bg-widget.component';
import { RandomWidgetComponent } from './random-widget/random-widget.component';
import { OrderByPipe } from './order-by.pipe';
import { BasicComponent } from './basic/basic.component';
import { BootgridModule } from "../bootgrid/bootgrid.module";
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    BgColumnComponent,
    BgWidgetComponent,
    RandomWidgetComponent,
    OrderByPipe,
    BasicComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    ResizableModule,
    BootgridModule
  ],
  providers: [],
  entryComponents: [RandomWidgetComponent],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
