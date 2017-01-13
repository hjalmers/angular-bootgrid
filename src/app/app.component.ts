import { Component } from '@angular/core';
import {Widget} from './widget';
import {DragulaService} from "ng2-dragula";
import {ResizeEvent} from 'angular-resizable-element';
import {ChangeDetectorRef} from '@angular/core'
import {RandomWidgetComponent} from "./random-widget/random-widget.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
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
      let size = this.columns[0][this.currentSize]
      this.columns.sort(this.getOrderForSize(this.currentSize));
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
  onResizeStart(event: ResizeEvent, column, columns, columnIndex): void {
    console.log('Element is resized');
    this.resizeStart = column[this.currentSize];
  }
  onResizeEnd(event: ResizeEvent, column, columns, columnIndex): void {
    console.log('Element was resized', event, Math.round((event.rectangle.width/this.innerWidth)*12));
    //let columnsWidth = this.getRowWidth(columns);
    let proposedWidth = Math.round((event.rectangle.width/this.innerWidth)*12);
    /*console.log(columnsWidth - this.resizeStart + proposedWidth);
    if(columnsWidth - this.resizeStart + proposedWidth <= 12) {
      column.xl = Math.round((event.rectangle.width/this.innerWidth)*12);
    }*/
    if(proposedWidth < 13){
      column[this.currentSize] = proposedWidth
    }

  }
  public availableComponents = [
    {
      component:RandomWidgetComponent,
      selector:'random-widget'
    }];

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

  public columns = [{xl:3, componentSelector:'random-widget',extra:'first',gridItemId:0,order:0,xlOrder:0,mdOrder:0},{xl:3, componentSelector:'random-widget',gridItemId:1,extra:'second',order:1,xlOrder:1,mdOrder:1},{xl:3, componentSelector:'random-widget',gridItemId:2,extra:'third',order:2,xlOrder:2,mdOrder:2},{xl:3, componentSelector:'random-widget',gridItemId:3,extra:'forth',order:3,xlOrder:3,mdOrder:3}];
  public rows = [this.columns];
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

  public addColumn = function(columns){
    columns.push({xl:4, componentSelector:'random-widget',order:columns.length,xsOrder:columns.length,smOrder:columns.length,mdOrder:columns.length,lgOrder:columns.length,xlOrder:columns.length});
  };

  public removeColumn = function(columns, columnIndex){
    columns.splice(columnIndex,1);
  };

  public getRowWidth = function(columns:Array<any>){
    //console.log(columns);
    let sum = 0;
    for(let i = 0;i < columns.length; i++){
      //console.log(columns[i]);
      sum += columns[i].xl;
    }

    //console.log(sum);
    return sum;
    //console.log(columns.reduce((previous, current) => previous.xl+current.xl, {xl:0}));
  };
  public grow = function(column, columns:Array<any>, columnIndex:number){
    /*let columnsWidth = this.getRowWidth(columns);
    if(columnsWidth < 12 && column.xl < (12-columns.length+1)) {
      console.log('case 1');
      column.xl = column.xl + 1;
    } else if(column.xl < (12-columns.length+1) && columnIndex+1 < columns.length && columns[columnIndex+1].xl > 1) {
      console.log('case 2');
      columns[columnIndex+1].xl = columns[columnIndex+1].xl - 1;
      column.xl = column.xl + 1;
    } else if (columnsWidth < 12){
      console.log('case 3');
      columns[columnIndex-1].xl = columns[columnIndex-1].xl - 1;
      column.xl = column.xl + 1;
    }*/
    //console.log(column[this.currentSize],column[this.currentSize])
    if(!column[this.currentSize] || column[this.currentSize] < 12){
      column[this.currentSize] =  !column[this.currentSize] ? 12: column[this.currentSize] + 1;
    }
  };
  public shrink = function(column, columns:Array<any>, columnIndex:number){
    let columnsWidth = this.getRowWidth(columns);
    /*if(columnsWidth > 1 && column.xl > 1) {
      column.xl = column.xl - 1;
      if(columnsWidth <= 12 && columnIndex+1 < columns.length && this.autoFillColumns){
        columns[columnIndex+1].xl = columns[columnIndex+1].xl + 1;
      } else if(this.autoFillColumns && columns.length > 1 && columnsWidth <= 12) {
        columns[columnIndex-1].xl = columns[columnIndex-1].xl + 1;
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
    //let item = this.columns[index];
    const sizeOrder = this.currentSize +'Order';
    //const startPos = e.getAttribute('data-org-index');
    console.log(e);
    let gridItemId = e.getAttribute('data-grid-item-id');
    console.log(gridItemId);
    const endPos = index;
    //console.log(endPos,e.getAttribute('data-index'));
    const gridItem = this.getGridItemById(gridItemId);
    console.log(gridItem);
    //console.log(endPos,gridItem[sizeOrder])
    this.updateOrder(endPos,gridItem,sizeOrder);
    //this.columns[startPos][sizeOrder] = endPos;
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
    console.log(this.columns);
    console.log('moved right? ' + increase,'new pos: ' + newPosition,'old pos: ' + oldPosition);

    // if we have no position for current size...
    if(!oldPosition) {

      // ...loop through all items and set current position as default for this size
      for (let i = 0; i < this.columns.length; i ++) {
        this.columns[i][size] = i;
      }
      oldPosition = movedItem[size];
    }

    for (let i = 0; i < this.columns.length; i ++) {
      const currentPos = this.columns[i][size];

      console.log(currentPos);
      // if this is the moved item...
      if (currentPos === oldPosition){
        // ...update current size position with new position
        this.columns[i][size] = newPosition;
        console.log('this one moved: '+this.columns[i].extra);
      }

      // ...else if item moved right and this item has position between moved item's current and final position...
      else if(increase && currentPos > oldPosition && currentPos <= newPosition) {
        // ...move this item to the left to make room
        console.log('this one was pushed left: '+this.columns[i].extra);
        this.columns[i][size] = currentPos-1;
      }
      // ...else if item moved left and this item has position between moved item's current and final position...
      else if(!increase && currentPos >= newPosition && currentPos < oldPosition) {
        // ...move this item to the right to make room
        console.log('this one was pushed right 1: '+this.columns[i].extra);
        this.columns[i][size] = currentPos+1;
      }
    }

    console.log(this.columns);

  };
  private getOrderForSize(size) {
    return (a,b)=> {
      if (a[size+'Order']  < b[size+'Order'] )
        return -1;
      if (a[size+'Order']  > b[size+'Order'] )
        return 1;
      return 0;
      //console.log(this.currentSize);
      /*let orderA = a[size+'Order'] ? a[size+'Order']:a.order;
       let orderB = b[size+'Order'] ? b[size+'Order']:b.order;

       //console.log(a,orderA,a[size+'Order'],b,orderB,b[size+'Order']);
       console.log(a.order,a[size+'Order'] ? a[size+'Order']:a.order);
       console.log(b.order,b[size+'Order'] ? b[size+'Order']:b.order);
       if (a[size+'Order'] ? a[size+'Order']:a.order < b[size+'Order'] ? b[size+'Order']:b.order) {
       return -1;
       }
       if (a[size+'Order'] ? a[size+'Order']:a.order > b[size+'Order'] ? b[size+'Order']:b.order) {
       return 1;
       }
       return 0;*/
    };
  };

  private getAvailabelSize = function() {

  };

  private getGridItemById = function(id:number) {
    console.log(id,this.columns);
    for (let i = 0; i < this.columns.length;i++) {
      console.log(this.columns[i].order);
      if(this.columns[i].order == id) {
        console.log('yeah');
        return this.columns[i];
      }
    }
  }

}
