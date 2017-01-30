import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootgridComponent } from './bootgrid.component';
import { ResizableModule } from "angular-resizable-element";
import { DragulaModule } from "ng2-dragula";
import { BgContentComponent } from "./bg-content/bg-content.component";

@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    ResizableModule
  ],
  declarations: [BootgridComponent, BgContentComponent],
  exports: [BootgridComponent,BgContentComponent]
})
export class BootgridModule { }
