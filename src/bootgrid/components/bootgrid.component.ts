import {
  Component, ChangeDetectorRef, ContentChild, TemplateRef, ViewEncapsulation, Input,
  SimpleChanges, OnChanges, OnDestroy
} from '@angular/core';
import {DragulaService} from "ng2-dragula";
import {ResizeEvent} from 'angular-resizable-element';


@Component({
  selector: 'bootgrid',
  encapsulation:ViewEncapsulation.None,
  template: `<div class="column-wrapper row" ngClass="{{edit ? 'edit-row':''}}" [dragula]="'bg-grid'">
  <div *ngFor="let item of items; let i = index;" class="mb-4" [attr.data-grid-item-id]="item.order" ngClass="{{'col-' + (!item.xs ? 12:item.xs)}} {{'col-sm-' + (!item.sm ? 0:item.sm)}} {{'col-md-' + (!item.md ? 0:item.md)}} {{'col-lg-' + (!item.lg ? 0:item.lg)}} {{'col-xl-' + (!item.xl ? 0:item.xl)}} {{edit ? 'edit-column':''}}" mwlResizable
       (resizing)="onResize($event,item)">
    <ng-template [ngTemplateOutlet]="template" [ngOutletContext]="{
        item: item
      }">
    </ng-template>
    <div class="bg-resize-handle" mwlResizeHandle [resizeEdges]="{right: true}"></div>
  </div>
</div>`
})
export class BootgridComponent implements OnChanges, OnDestroy {
  @ContentChild(TemplateRef) template:TemplateRef<any>;
  @Input() items = [];

  private innerWidth:number = window.innerWidth;
  private currentSize:string;

  constructor(private dragulaService: DragulaService, private cdr: ChangeDetectorRef){

    let getWindow = () => {
      return window.innerWidth;
    };

    this.innerWidth = getWindow();
    this.currentSize = this.getCurrentSize();

    window.onresize = () => {
      this.innerWidth = getWindow();
      this.currentSize = this.getCurrentSize();
      let size = this.items[0][this.currentSize];
      this.items.sort(this.getOrderForSize(this.currentSize));
      this.cdr.detectChanges(); //running change detection manually
    };

    dragulaService.setOptions('bg-grid', {
      moves: function (el, container, handle) {
        return !(handle instanceof SVGElement) && handle.className.indexOf('bg-handle') !== -1;
      }
    });
    dragulaService.drop.subscribe((value) => {
      //console.log(value);
      this.onDrop(value.slice(1));
    });
  }

  onResize(event: ResizeEvent, item): void {
    //console.log('Element was resized', event, Math.round((event.rectangle.width/this.innerWidth)*12));
    let proposedWidth = Math.round((event.rectangle.width/this.innerWidth)*12);
    if(proposedWidth < 13){
      item[this.currentSize] = proposedWidth
    }

  }

  public edit:boolean = false;
  public editLayout = function(){
    this.edit = !this.edit;
  };

  public addItem = function(){
    this.items.push(
      {
        xl:4,
        componentSelector:'random-widget',
        order:this.items.length,
        xsOrder:this.items.length,
        smOrder:this.items.length,
        mdOrder:this.items.length,
        lgOrder:this.items.length,
        xlOrder:this.items.length,
        id:this.generateId()
      });
    this.items.sort(this.getOrderForSize(this.currentSize));
  };

  public deleteItem = function(item){
    for (let i = 0; i < this.items.length; i++) {
      if(item.id && this.items[i].id === item.id) {
        this.items.splice(i,1);
      }
    }
  };

  public grow = function(item){
    if(!item[this.currentSize] || item[this.currentSize] < 12){
      item[this.currentSize] =  !item[this.currentSize] ? 12: item[this.currentSize] + 1;
    }
  };
  public shrink = function(item){
    if(!item[this.currentSize] || item[this.currentSize] > 1) {
      item[this.currentSize] = !item[this.currentSize] ? 12: item[this.currentSize] - 1;
    }
  };
  private getCurrentSize = function () {
    let viewportWidth = this.innerWidth;
    switch(true){
      case (viewportWidth < 576):
        return 'xs';
      case (viewportWidth < 768):
        return 'sm';
      case (viewportWidth < 992):
        return 'md';
      case (viewportWidth < 1200):
        return 'lg';
      case (viewportWidth >= 1200):
        return 'xl';
      default:
        return 'xs';
    }
  };
  private onDrop(args) {
    let [e, el] = args;
    let index = this.getElementIndex(e);
    //let item = this.items[index];
    const sizeOrder = this.currentSize +'Order';
    //const startPos = e.getAttribute('data-org-index');
    console.log(e);
    let id = e.getAttribute('data-grid-item-id');
    console.log(id);
    const endPos = index;
    //console.log(endPos,e.getAttribute('data-index'));
    const gridItem = this.getGridItemById(id);
    console.log(gridItem);
    //console.log(endPos,gridItem[sizeOrder])
    this.updateOrder(endPos,gridItem,sizeOrder);
    //this.items[startPos][sizeOrder] = endPos;
    //console.log(e.getAttribute('data-index'),e.getAttribute('data-org-index'),index, item)
  }
  private getElementIndex(el: any) {
    //console.log(el,el.children);
    //console.log('index',[].slice.call(el.children).indexOf(el.children[1]));
    return [].slice.call(el.parentElement.children).indexOf(el);
  }
  private updateOrder = function(newPosition:number,movedItem,size){
    let oldPosition:number = movedItem[size];
    let increase = newPosition > oldPosition;
    let diff = oldPosition - newPosition;
    //console.log(this.items);
    //console.log('moved right? ' + increase,'new pos: ' + newPosition,'old pos: ' + oldPosition);

    // if we have no position for current size...
    if(!oldPosition) {

      // ...loop through all items and set current position as default for this size
      for (let i = 0; i < this.items.length; i ++) {
        this.items[i][size] = i;
      }
      oldPosition = movedItem[size];
    }

    for (let i = 0; i < this.items.length; i ++) {
      const currentPos = this.items[i][size];

      //console.log(currentPos);
      // if this is the moved item...
      if (currentPos === oldPosition){
        // ...update current size position with new position
        this.items[i][size] = newPosition;
        //console.log('this one moved: '+this.items[i].extra);
      }

      // ...else if item moved right and this item has position between moved item's current and final position...
      else if(increase && currentPos > oldPosition && currentPos <= newPosition) {
        // ...move this item to the left to make room
        //console.log('this one was pushed left: '+this.items[i].extra);
        this.items[i][size] = currentPos-1;
      }
      // ...else if item moved left and this item has position between moved item's current and final position...
      else if(!increase && currentPos >= newPosition && currentPos < oldPosition) {
        // ...move this item to the right to make room
        //console.log('this one was pushed right 1: '+this.items[i].extra);
        this.items[i][size] = currentPos+1;
      }
    }

    //console.log(this.items);

  };
  ngOnChanges(changes:SimpleChanges) {
    //console.log(changes);
    if(changes['items']) {
      for (let i = 0; i < this.items.length; i++ ) {
        if(!this.items[i].id) {
          this.items[i].id = this.generateId();
        }
      }
    }
  }

  ngOnDestroy() {
    this.dragulaService.destroy('bg-grid');
  }

  private getOrderForSize(size) {
    return (a,b)=> {
      if (a[size+'Order']  < b[size+'Order'] )
        return -1;
      if (a[size+'Order']  > b[size+'Order'] )
        return 1;
      return 0;
    };
  };

  private generateId() {
    let d = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }


  private getGridItemById = function(id:number) {
    //console.log(id,this.items);
    for (let i = 0; i < this.items.length;i++) {
      //console.log(this.items[i].order);
      if(this.items[i].order == id) {
        //console.log('yeah');
        return this.items[i];
      }
    }
  }
}
