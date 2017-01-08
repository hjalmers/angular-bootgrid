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

  constructor(private dragulaService: DragulaService, private cdr: ChangeDetectorRef){

    let getWindow = () => {
      return window.innerWidth;
    };

    window.onresize = () => {
      this.innerWidth = getWindow();
      this.currentSize = this.getCurrentSize();
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

  public columns = [{xl:4, componentSelector:'random-widget',order:0,xlOrder:1,mdOrder:0},{xl:6, componentSelector:'random-widget',order:1,xlOrder:0,mdOrder:1}];
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
    const startPos = e.getAttribute('data-org-index');
    const endPos = index;
    //console.log(endPos,e.getAttribute('data-index'));
    this.columns[startPos][sizeOrder] = endPos;
    //console.log(e.getAttribute('data-index'),e.getAttribute('data-org-index'),index, item)

  }
  private getElementIndex(el: any) {
    //console.log(el,el.children);
    //console.log('index',[].slice.call(el.children).indexOf(el.children[1]));
    return [].slice.call(el.parentElement.children).indexOf(el);
  }

}
