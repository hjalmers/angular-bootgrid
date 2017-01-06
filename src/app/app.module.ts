import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DragulaModule} from 'ng2-dragula/ng2-dragula';
import {ResizableModule} from 'angular-resizable-element';
import { BgColumnComponent } from './bg-column/bg-column.component';
import { BgWidgetComponent } from './bg-widget/bg-widget.component';
import { BgContainerComponent } from './bg-container/bg-container.component';


@NgModule({
  declarations: [
    AppComponent,
    BgColumnComponent,
    BgWidgetComponent,
    BgContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    ResizableModule
  ],
  providers: [],
  entryComponents: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
