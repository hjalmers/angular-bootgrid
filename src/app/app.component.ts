import { Component } from '@angular/core';
import {Widget} from './widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

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

  public columns = [{xl:4},{xl:4}];
  public cards = [this.columns];
  public edit:boolean = false;
  public autoFillColumns:boolean = true;

  public editLayout = function(){
    this.edit = !this.edit;
  };

  public addRow = function(){
    this.cards.push([{xl:12}]);
  };

  public removeRow = function(){
    this.cards.splice(this.cards.length-1,1);
  };

  public addColumn = function(columns){
    columns.push({xl:4});
  };

  public removeColumn = function(columns){
    columns.splice(columns.length-1,1);
  };

  public getRowWidth = function(columns:Array<any>){
    console.log(columns);
    let sum = 0;
    for(let i = 0;i < columns.length; i++){
      console.log(columns[i]);
      sum += columns[i].xl;
    }

    console.log(sum);
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
      } else if(this.autoFillColumns && columns.length > 1) {
        columns[columnIndex-1].xl = columns[columnIndex-1].xl + 1;
      }
    }
  };

}
