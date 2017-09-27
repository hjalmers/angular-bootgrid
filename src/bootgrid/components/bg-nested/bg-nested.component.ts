import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {DragulaService} from 'ng2-dragula';

@Component({
    selector: 'bg-nested',
    template: `
        <div class="row nested" [ngClass]="size" [dragula]="bagId+'-child'">
            <!--<div *ngFor="let item of item.items; let i = index;" [attr.data-grid-item-id]="item.id" ngClass="{{'grid-item-'+item.itemSize}} {{'col-' + (!item.size ? 12:item.size)}} {{!item.smSize ? '':'col-sm-'+(item.smSize*2 > 12 ? 12: item.smSize*2) }} {{!item.mdSize ? '':'col-md-'+(item.mdSize*2 > 12 ? 12:item.mdSize*2)}} {{!item.lgSize ? '':'col-lg-'+(item.lgSize*2 > 12 ? 12:item.lgSize*2)}} {{!item.xlSize ? '':'col-xl-'+(item.xlSize*2 > 12 ? 12:item.xlSize*2)}} {{edit ? 'edit-column':''}}" mwlResizable -->
            <div *ngFor="let item of items; let i = index;" [attr.data-grid-item-id]="item.id" ngClass="{{item.grouped ? 'my-3':''}} {{'grid-item-'+item.itemSize}} {{'col-' + item.size}} {{!item.smSize ? '':'col-sm-'+item.smSize }} {{!item.mdSize ? '':'col-md-'+item.mdSize}} {{!item.lgSize ? '':'col-lg-'+item.lgSize}} {{!item.xlSize ? '':'col-xl-'+item.xlSize}} {{edit ? 'edit-column':''}}" mwlResizable
                 (resizing)="onResize($event,item)">
                <ng-template [ngTemplateOutlet]="template" [ngOutletContext]="{item: item}"></ng-template>
                <div class="bg-resize-handle" mwlResizeHandle [resizeEdges]="{right: true}"></div>
            </div>
        </div>
    `,
    encapsulation:ViewEncapsulation.None,
    styles: []
})
export class BgNestedComponent implements OnInit, OnDestroy {
    get t(): number {
        return this._t;
    }

    @Input() set t(value: number) {
        //console.log(value);
        this.checkSize();
        this._t = value;
    }
    get items(): Array<any> {
        return this._items;
    }

    @Input() set items(value: Array<any>) {
        //console.log('testsetset');
        this._items = value;
    }

    private _items:Array<any>;

    @Input() template:any;
    @Input() bagId: any;

    private _t:number;

    size:string;
    constructor(private renderer: Renderer2, private hostElement: ElementRef, private dragulaService: DragulaService) {
      //console.log('new');
    }

    ngOnInit() {
        //this.checkSize();
        /*this.dragulaService.setOptions('test', {
            moves: function (el, container, handle) {
              console.log('test', el,container);
                function findAncestor (el, cls) {
                    while ((el = el.parentElement) && !el.classList.contains(cls)) {}
                    return el;
                }
                const ANCESTOR = findAncestor(handle, 'temp');
                return true //!(handle instanceof SVGElement) && (handle.className.indexOf('temp') !== -1 || ANCESTOR && ANCESTOR.className.indexOf('temp') !== -1);
            }
        });*/
    }

    checkSize() {
        const PARENT_WIDTH = window.getComputedStyle(this.hostElement.nativeElement.parentElement, null).getPropertyValue("width");
        const WIDTH = window.getComputedStyle(this.hostElement.nativeElement, null).getPropertyValue("width");

        if(parseFloat(WIDTH) >= parseFloat(PARENT_WIDTH)) {
            //this.renderer.addClass(this.hostElement.nativeElement, 'full');
            this.size = 'full';
        } else {
            this.size = 'half';

            //this.renderer.addClass(this.hostElement.nativeElement, 'half');
        }
    }

    ngOnDestroy() {
        this.dragulaService.destroy(this.bagId + '-child');
    }

}
