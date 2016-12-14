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

  public row = [{xl:12},{xl:12}];
  public cards = [this.row];
  public edit:boolean = false;

  public editLayout = function(){
    this.edit = !this.edit;
  };

  public addRow = function(){
    this.cards.push([{xl:12}]);
  };

  public removeRow = function(){
    this.cards.splice(this.cards.length-1,1);
  };

  public addColumn = function(row){
    row.push({xl:12});
  };

  public removeColumn = function(row){
    row.splice(row.length-1,1);
  };

  public getRowWidth = function(row:Array){
    console.log(row);
    let sum = 0;
    for(let i = 0;i < row.length; i++){
      console.log(row[i]);
      sum += row[i].xl;
    }

    console.log(sum);
    return sum;
    //console.log(row.reduce((previous, current) => previous.xl+current.xl, {xl:0}));
  };
  public grow = function(column, row:Array){
    let rowWidth = this.getRowWidth(row);
    if(rowWidth < 12 && column.xl < (12-row.length+1)) {
      column.xl = column.xl + 1;
    } else if(column.xl < (12-row.length+1)) {
      row[1].xl = row[1].xl - 1;
      column.xl = column.xl + 1;
    }
  };
  public shrink = function(column, row:Array){
    let rowWidth = this.getRowWidth(row);
    if(rowWidth > 1 && column.xl > 1) {
      column.xl = column.xl - 1;
      if(rowWidth <= 12){
        row[1].xl = row[1].xl + 1;
      }
    }
  };

}
