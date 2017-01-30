import {
  Component, OnInit, ChangeDetectorRef, ContentChild, TemplateRef, ViewEncapsulation, Input,
  SimpleChanges, OnChanges
} from '@angular/core';
import {DragulaService} from "ng2-dragula";
import {ResizeEvent} from 'angular-resizable-element';
import {RandomWidgetComponent} from "../app/random-widget/random-widget.component";
import {Widget} from "../app/widget";

@Component({
  selector: 'bootgrid',
  templateUrl: 'bootgrid.component.html',
  styleUrls: ['bootgrid.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class BootgridComponent implements OnChanges {
  @ContentChild(TemplateRef) template:TemplateRef<any>;
  public availableComponents = [
    {
      component: RandomWidgetComponent,
      selector: 'random-widget'
    }];
  @Input() items = [];


  innerWidth:number = window.innerWidth;
  currentSize:string;
  sizes = ['xs','sm','md','lg','xl'];

  constructor(private dragulaService: DragulaService, private cdr: ChangeDetectorRef){

    let getWindow = () => {
      return window.innerWidth;
    };

    this.innerWidth = getWindow();
    this.currentSize = this.getCurrentSize();

    window.onresize = () => {
      this.innerWidth = getWindow();
      this.currentSize = this.getCurrentSize();
      let size = this.items[0][this.currentSize]
      this.items.sort(this.getOrderForSize(this.currentSize));
      this.cdr.detectChanges(); //running change detection manually
    };

    dragulaService.setOptions('second-bag', {
      moves: function (el, container, handle) {
        return handle.className === 'card-header handle';
      }
    });
    dragulaService.drop.subscribe((value) => {
      //console.log(value);
      this.onDrop(value.slice(1));
    });
  }
  resizeStart:number;
  onResizeStart(event: ResizeEvent, column, items, columnIndex): void {
    console.log('Element is resized');
    this.resizeStart = column[this.currentSize];
  }
  onResizeEnd(event: ResizeEvent, column, items, columnIndex): void {
    console.log('Element was resized', event, Math.round((event.rectangle.width/this.innerWidth)*12));
    //let itemsWidth = this.getRowWidth(items);
    let proposedWidth = Math.round((event.rectangle.width/this.innerWidth)*12);
    /*console.log(itemsWidth - this.resizeStart + proposedWidth);
     if(itemsWidth - this.resizeStart + proposedWidth <= 12) {
     column.xl = Math.round((event.rectangle.width/this.innerWidth)*12);
     }*/
    if(proposedWidth < 13){
      column[this.currentSize] = proposedWidth
    }

  }

  public widgets: Array<Widget> = [
    {
      xl:12,
      sm:3
    },{
      xl:12,
      sm:3
    },{
      xl:12,
      sm:3
    },{
      xl:12,
      sm:3
    },{
      xl:12,
      sm:3
    },{
      xl:12,
      sm:3
    },{
      xl:12,
      sm:3
    },{
      xl:12,
      sm:3
    }
  ];

  public rows = [this.items];
  public edit:boolean = false;
  public autoFillColumns:boolean = true;

  public editLayout = function(){
    this.edit = !this.edit;
  };

  public addRow = function(){
    this.rows.push([]);
  };

  public removeRow = function(){
    this.rows.splice(this.rows.length-1,1);
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

  public getRowWidth = function(items:Array<any>){
    //console.log(items);
    let sum = 0;
    for(let i = 0;i < items.length; i++){
      //console.log(items[i]);
      sum += items[i].xl;
    }

    //console.log(sum);
    return sum;
    //console.log(items.reduce((previous, current) => previous.xl+current.xl, {xl:0}));
  };
  public grow = function(column, items:Array<any>, columnIndex:number){
    /*let itemsWidth = this.getRowWidth(items);
     if(itemsWidth < 12 && column.xl < (12-items.length+1)) {
     console.log('case 1');
     column.xl = column.xl + 1;
     } else if(column.xl < (12-items.length+1) && columnIndex+1 < items.length && items[columnIndex+1].xl > 1) {
     console.log('case 2');
     items[columnIndex+1].xl = items[columnIndex+1].xl - 1;
     column.xl = column.xl + 1;
     } else if (itemsWidth < 12){
     console.log('case 3');
     items[columnIndex-1].xl = items[columnIndex-1].xl - 1;
     column.xl = column.xl + 1;
     }*/
    //console.log(column[this.currentSize],column[this.currentSize])
    if(!column[this.currentSize] || column[this.currentSize] < 12){
      column[this.currentSize] =  !column[this.currentSize] ? 12: column[this.currentSize] + 1;
    }
  };
  public shrink = function(column, items:Array<any>, columnIndex:number){
    let itemsWidth = this.getRowWidth(items);
    /*if(itemsWidth > 1 && column.xl > 1) {
     column.xl = column.xl - 1;
     if(itemsWidth <= 12 && columnIndex+1 < items.length && this.autoFillColumns){
     items[columnIndex+1].xl = items[columnIndex+1].xl + 1;
     } else if(this.autoFillColumns && items.length > 1 && itemsWidth <= 12) {
     items[columnIndex-1].xl = items[columnIndex-1].xl + 1;
     }
     }*/
    //console.log(column)
    if(!column[this.currentSize] || column[this.currentSize] > 1) {
      column[this.currentSize] = !column[this.currentSize] ? 12: column[this.currentSize] - 1;
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
  }
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
    console.log(this.items);
    console.log('moved right? ' + increase,'new pos: ' + newPosition,'old pos: ' + oldPosition);

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

      console.log(currentPos);
      // if this is the moved item...
      if (currentPos === oldPosition){
        // ...update current size position with new position
        this.items[i][size] = newPosition;
        console.log('this one moved: '+this.items[i].extra);
      }

      // ...else if item moved right and this item has position between moved item's current and final position...
      else if(increase && currentPos > oldPosition && currentPos <= newPosition) {
        // ...move this item to the left to make room
        console.log('this one was pushed left: '+this.items[i].extra);
        this.items[i][size] = currentPos-1;
      }
      // ...else if item moved left and this item has position between moved item's current and final position...
      else if(!increase && currentPos >= newPosition && currentPos < oldPosition) {
        // ...move this item to the right to make room
        console.log('this one was pushed right 1: '+this.items[i].extra);
        this.items[i][size] = currentPos+1;
      }
    }

    console.log(this.items);

  };
  ngOnChanges(changes:SimpleChanges) {
    console.log(changes);
    if(changes['items']) {
      for (let i = 0; i < this.items.length; i++ ) {
        if(!this.items[i].id) {
          this.items[i].id = this.generateId();
        }
      }
    }

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
    console.log(id,this.items);
    for (let i = 0; i < this.items.length;i++) {
      console.log(this.items[i].order);
      if(this.items[i].order == id) {
        console.log('yeah');
        return this.items[i];
      }
    }
  }
}
