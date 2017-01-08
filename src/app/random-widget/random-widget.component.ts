import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'random-widget',
  templateUrl: './random-widget.component.html',
  styleUrls: ['./random-widget.component.css']
})
export class RandomWidgetComponent implements OnInit {

  color:string;
  height:number;
  constructor() {
    this.color = this.randomColor();
    this.height = this.randomHeight();
  }

  randomColor = function() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  };

  randomHeight = function() {
    return Math.floor(Math.random()*100);
  };
  ngOnInit() {
  }

}
