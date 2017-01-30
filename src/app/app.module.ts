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


@NgModule({
  declarations: [
    AppComponent,
    RandomWidgetComponent,
    BasicComponent,
    CardComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BootgridModule
  ],
  providers: [],
  entryComponents: [RandomWidgetComponent],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
