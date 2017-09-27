import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootgridComponent } from './components/bootgrid.component';
import { ResizableModule } from "angular-resizable-element";
import { DragulaModule } from "ng2-dragula";
import { BgContentComponent } from "./components/bg-content.component";
import { GroupItemsPipe } from "./pipes/group-items.pipe";
import {GroupWidthDirective} from './directives/group-width.directive';
import {BgNestedComponent} from './components/bg-nested/bg-nested.component';


@NgModule({
    imports: [
        CommonModule,
        DragulaModule,
        ResizableModule
    ],
    declarations: [
        BootgridComponent,
        BgContentComponent,
        GroupItemsPipe,
        GroupWidthDirective,
        BgNestedComponent
    ],
    exports: [
        BootgridComponent,
        BgContentComponent
    ]
})
export class BootgridModule { }
