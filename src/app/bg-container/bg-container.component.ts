import { Component, OnInit } from '@angular/core';
import {Widget} from '../widget';
import {DragulaService} from "ng2-dragula";
import {ResizeEvent} from 'angular-resizable-element';
import {ChangeDetectorRef} from '@angular/core'

@Component({
  selector: 'bg-container',
  templateUrl: './bg-container.component.html',
  styleUrls: ['./bg-container.component.scss']
})
export class BgContainerComponent {

  innerWidth:number = window.innerWidth;

  constructor(private dragulaService: DragulaService, private cdr: ChangeDetectorRef){

    let getWindow = () => {
      return window.innerWidth;
    };

    window.onresize = () => {
      this.innerWidth = getWindow();
      this.cdr.detectChanges(); //running change detection manually
    };

    dragulaService.setOptions('bag-0', {
      moves: function (el, container, handle) {
        return handle.className === 'card-header handle';
      }
    });
  }
  resizeStart:number;
  onResizeStart(event: ResizeEvent, column, columns, columnIndex): void {
    console.log('Element is resized');
    this.resizeStart = column.xl;
  }
  onResizeEnd(event: ResizeEvent, column, columns, columnIndex): void {
    console.log('Element was resized', event, Math.round((event.rectangle.width/this.innerWidth)*12));
    let columnsWidth = this.getRowWidth(columns);
    let proposedWidth = Math.round((event.rectangle.width/this.innerWidth)*12);
    console.log(columnsWidth - this.resizeStart + proposedWidth);
    if(columnsWidth - this.resizeStart + proposedWidth <= 12) {
      column.xl = Math.round((event.rectangle.width/this.innerWidth)*12);
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

  public columns = [];
  public rows = [this.columns];
  public edit:boolean = false;
  public autoFillColumns:boolean = true;

  public editLayout = function(){
    this.edit = !this.edit;
  };

  public addRow = function(){
    const bagName = 'bag-'+(this.rows.length);
    console.log(bagName);
    this.dragulaService.setOptions(bagName, {
      moves: function (el, container, handle) {
        return handle.className === 'card-header handle';
      }
    });
    this.rows.push([]);

  };
  public getBagName = function(rowIndex){
    return 'bag-'+rowIndex;
  }

  public removeRow = function(){
    this.rows.splice(this.rows.length-1,1);
  };

  public addColumn = function(columns){
    columns.push({xl:4});
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
    let columnsWidth = this.getRowWidth(columns);
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
    }
  };
  public shrink = function(column, columns:Array<any>, columnIndex:number){
    let columnsWidth = this.getRowWidth(columns);
    if(columnsWidth > 1 && column.xl > 1) {
      column.xl = column.xl - 1;
      if(columnsWidth <= 12 && columnIndex+1 < columns.length && this.autoFillColumns){
        columns[columnIndex+1].xl = columns[columnIndex+1].xl + 1;
      } else if(this.autoFillColumns && columns.length > 1 && columnsWidth <= 12) {
        columns[columnIndex-1].xl = columns[columnIndex-1].xl + 1;
      }
    }
  };

}