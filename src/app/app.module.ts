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
import { BgContentComponent } from './bg-content/bg-content.component';
import { OrderByPipe } from './order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BgColumnComponent,
    BgWidgetComponent,
    RandomWidgetComponent,
    BgContentComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    ResizableModule
  ],
  providers: [],
  entryComponents: [RandomWidgetComponent],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
